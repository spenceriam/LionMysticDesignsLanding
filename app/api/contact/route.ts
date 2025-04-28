import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Create a transporter with SMTP settings
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number.parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_PORT === "465", // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function POST(request: Request) {
  try {
    console.log("Contact form submission received")

    // Log configuration (without exposing sensitive data)
    console.log("Email Configuration:", {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_PORT === "465",
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
    })

    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 })
    }

    // Prepare email content
    const mailOptions = {
      from: `"Lion Mystic" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email, // This allows you to reply directly to the person who submitted the form
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #000000;">New Contact Form Submission</h2>
  <p><strong>From:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <div style="margin-top: 20px; border-left: 4px solid #000000; padding-left: 15px;">
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
  </div>
  <p style="margin-top: 30px; font-size: 12px; color: #666;">
    This message was sent from the contact form on Lion Mystic website.
  </p>
</div>
`,
    }

    try {
      const info = await transporter.sendMail(mailOptions)
      console.log("Email sent successfully:", info.messageId)

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
