import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Create a transporter with SMTP settings
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.ionos.com",
  port: Number.parseInt(process.env.EMAIL_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || "contact@lionmystic.com",
    pass: process.env.EMAIL_PASS,
  },
})

export async function POST(request: Request) {
  try {
    console.log("Contact form submission received")

    // Log environment variables (without showing the actual password)
    console.log("SMTP Configuration:", {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      user: process.env.EMAIL_USER,
      passProvided: !!process.env.EMAIL_PASS,
    })

    const body = await request.json()
    const { name, email, message } = body

    console.log("Form data received:", { name, email, messageLength: message?.length })

    if (!name || !email || !message) {
      console.log("Missing required fields:", { name: !!name, email: !!email, message: !!message })
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log("Invalid email format:", email)
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 })
    }

    // Verify transporter connection
    try {
      console.log("Verifying SMTP connection...")
      await transporter.verify()
      console.log("SMTP connection verified successfully")
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError)
      return NextResponse.json(
        {
          message: "Email server connection failed",
          error: (verifyError as Error).message,
        },
        { status: 500 },
      )
    }

    // Send email
    const mailOptions = {
      from: `"Lion Mystic Designs" <${process.env.EMAIL_USER || "contact@lionmystic.com"}>`,
      to: process.env.EMAIL_USER || "contact@lionmystic.com",
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
  <p><strong>From:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <div style="margin-top: 20px; border-left: 4px solid #3b82f6; padding-left: 15px;">
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
  </div>
  <p style="margin-top: 30px; font-size: 12px; color: #666;">
    This message was sent from the contact form on Lion Mystic Designs website.
  </p>
</div>
      `,
    }

    console.log("Attempting to send email...")

    try {
      const info = await transporter.sendMail(mailOptions)
      console.log("Email sent successfully:", {
        messageId: info.messageId,
        response: info.response,
      })

      return NextResponse.json(
        {
          message: "Message sent successfully",
          messageId: info.messageId,
        },
        { status: 200 },
      )
    } catch (emailError) {
      console.error("Failed to send email:", emailError)
      return NextResponse.json(
        {
          message: "Failed to send email",
          error: (emailError as Error).message,
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Unexpected error in contact form:", error)
    return NextResponse.json(
      {
        message: "Something went wrong",
        error: (error as Error).message,
      },
      { status: 500 },
    )
  }
}
