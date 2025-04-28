import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function GET(request: Request) {
  try {
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

    // Log configuration (without exposing sensitive data)
    const config = {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_PORT === "465",
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
    }

    console.log("Testing email configuration:", config)

    try {
      // Verify connection
      await transporter.verify()
      console.log("SMTP connection verified successfully")

      // Send test email
      const info = await transporter.sendMail({
        from: `"Lion Mystic Test" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: "Test Email from Lion Mystic",
        text: "This is a test email to verify SMTP settings are working correctly.",
        html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #000000;">Test Email</h2>
  <p>This is a test email to verify that your SMTP settings are configured correctly.</p>
  <p>If you're seeing this, your email system is working!</p>
  <hr>
  <p><strong>Configuration:</strong></p>
  <ul>
    <li>Host: ${process.env.EMAIL_HOST}</li>
    <li>Port: ${process.env.EMAIL_PORT}</li>
    <li>Secure: ${process.env.EMAIL_PORT === "465" ? "Yes" : "No"}</li>
    <li>From: ${process.env.EMAIL_USER}</li>
    <li>To: ${process.env.EMAIL_TO}</li>
  </ul>
</div>
        `,
      })

      return NextResponse.json({
        success: true,
        message: "Test email sent successfully",
        messageId: info.messageId,
        config,
      })
    } catch (error) {
      console.error("SMTP test failed:", error)
      return NextResponse.json(
        {
          success: false,
          message: "SMTP test failed",
          error: (error as Error).message,
          config,
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Unexpected error in test-email endpoint:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Unexpected error",
        error: (error as Error).message,
      },
      { status: 500 },
    )
  }
}
