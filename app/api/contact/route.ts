import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    console.log("Contact form submission received")

    // Validate environment variables first
    const host = process.env.EMAIL_HOST
    const port = process.env.EMAIL_PORT
    const user = process.env.EMAIL_USER
    const pass = process.env.EMAIL_PASS
    const to = process.env.EMAIL_TO

    // Log configuration (without exposing sensitive data)
    console.log("Email Configuration:", {
      host: host || "NOT SET",
      port: port || "NOT SET",
      secure: port === "465",
      from: user || "NOT SET",
      to: to || "NOT SET",
      hasPassword: pass ? "YES" : "NO",
    })

    // Validate required variables
    if (!host || host === "127.0.0.1" || host === "localhost") {
      console.error(`Invalid EMAIL_HOST: ${host || "not set"}`)
      return NextResponse.json(
        {
          message: "Server configuration error: Invalid SMTP host",
        },
        { status: 500 },
      )
    }

    if (!port) {
      console.error("EMAIL_PORT not set")
      return NextResponse.json(
        {
          message: "Server configuration error: SMTP port not set",
        },
        { status: 500 },
      )
    }

    if (!user) {
      console.error("EMAIL_USER not set")
      return NextResponse.json(
        {
          message: "Server configuration error: SMTP username not set",
        },
        { status: 500 },
      )
    }

    if (!pass) {
      console.error("EMAIL_PASS not set")
      return NextResponse.json(
        {
          message: "Server configuration error: SMTP password not set",
        },
        { status: 500 },
      )
    }

    if (!to) {
      console.error("EMAIL_TO not set")
      return NextResponse.json(
        {
          message: "Server configuration error: Recipient email not set",
        },
        { status: 500 },
      )
    }

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

    // Create a transporter with SMTP settings
    const transporter = nodemailer.createTransport({
      host: host,
      port: Number.parseInt(port),
      secure: port === "465", // true for 465, false for other ports
      auth: {
        user: user,
        pass: pass,
      },
    })

    // Prepare email content
    const mailOptions = {
      from: `"Lion Mystic" <${user}>`,
      to: to,
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
