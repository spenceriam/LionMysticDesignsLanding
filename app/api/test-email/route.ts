import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// This is a test endpoint to verify SMTP settings
export async function GET(request: Request) {
  try {
    // Log environment variables (without showing the actual password)
    const config = {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      user: process.env.EMAIL_USER,
      passProvided: !!process.env.EMAIL_PASS,
      passLength: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0,
    }

    console.log("SMTP Configuration for test:", config)

    // Create a transporter with SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number.parseInt(process.env.EMAIL_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true, // Enable debug output
      logger: true, // Log information about the transport
    })

    try {
      console.log("Verifying SMTP connection...")
      await transporter.verify()
      console.log("SMTP connection verified successfully")

      // Send a test email
      const info = await transporter.sendMail({
        from: `"Test Email" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "Test Email from Lion Mystic Designs",
        text: "This is a test email to verify SMTP settings.",
        html: "<p>This is a test email to verify SMTP settings.</p>",
      })

      console.log("Test email sent successfully:", {
        messageId: info.messageId,
        response: info.response,
      })

      return NextResponse.json({
        success: true,
        message: "SMTP connection verified and test email sent",
        config: config,
        messageId: info.messageId,
      })
    } catch (verifyError) {
      console.error("SMTP verification or test email failed:", verifyError)

      return NextResponse.json(
        {
          success: false,
          message: "SMTP verification or test email failed",
          error: (verifyError as Error).message,
          config: config,
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
