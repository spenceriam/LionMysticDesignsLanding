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

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error in contact form:", error)
    return NextResponse.json({ message: "Something went wrong", error: (error as Error).message }, { status: 500 })
  }
}
