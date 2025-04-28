import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function GET(request: Request) {
  try {
    // Validate environment variables first
    const host = process.env.EMAIL_HOST
    const port = process.env.EMAIL_PORT
    const user = process.env.EMAIL_USER
    const pass = process.env.EMAIL_PASS
    const to = process.env.EMAIL_TO

    // Log all environment variables for debugging
    console.log("Email Environment Variables Check:", {
      host: host || "NOT SET",
      port: port || "NOT SET",
      user: user || "NOT SET",
      to: to || "NOT SET",
      hasPassword: pass ? "YES" : "NO",
    })

    // Validate required variables
    if (!host || host === "127.0.0.1" || host === "localhost") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid EMAIL_HOST configuration",
          error: `EMAIL_HOST is ${!host ? "not set" : "set to localhost"}. Please set it to your SMTP server address.`,
          currentValue: host || "undefined",
        },
        { status: 500 },
      )
    }

    if (!port) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid EMAIL_PORT configuration",
          error: "EMAIL_PORT is not set. Please set it to your SMTP server port.",
        },
        { status: 500 },
      )
    }

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid EMAIL_USER configuration",
          error: "EMAIL_USER is not set. Please set it to your SMTP username/email.",
        },
        { status: 500 },
      )
    }

    if (!pass) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid EMAIL_PASS configuration",
          error: "EMAIL_PASS is not set. Please set it to your SMTP password.",
        },
        { status: 500 },
      )
    }

    if (!to) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid EMAIL_TO configuration",
          error: "EMAIL_TO is not set. Please set it to the recipient email address.",
        },
        { status: 500 },
      )
    }

    // Create a transporter with SMTP settings
    const transporterConfig = {
      host: host, // Use the validated host
      port: Number.parseInt(port),
      secure: port === "465", // true for 465, false for other ports
      auth: {
        user: user,
        pass: pass,
      },
    }

    console.log("Creating transporter with config:", {
      host: transporterConfig.host,
      port: transporterConfig.port,
      secure: transporterConfig.secure,
      auth: { user: transporterConfig.auth.user, pass: "********" }, // Hide password in logs
    })

    const transporter = nodemailer.createTransport(transporterConfig)

    try {
      // Verify connection
      console.log(`Attempting to verify SMTP connection to ${host}:${port}...`)
      await transporter.verify()
      console.log("SMTP connection verified successfully")

      // Send test email
      console.log(`Sending test email from ${user} to ${to}...`)
      const info = await transporter.sendMail({
        from: `"Lion Mystic Test" <${user}>`,
        to: to,
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
    <li>Host: ${host}</li>
    <li>Port: ${port}</li>
    <li>Secure: ${port === "465" ? "Yes" : "No"}</li>
    <li>From: ${user}</li>
    <li>To: ${to}</li>
  </ul>
</div>
        `,
      })

      console.log("Email sent successfully:", info.messageId)
      return NextResponse.json({
        success: true,
        message: "Test email sent successfully",
        messageId: info.messageId,
        config: {
          host,
          port,
          secure: port === "465",
          from: user,
          to,
        },
      })
    } catch (error) {
      console.error("SMTP test failed:", error)
      return NextResponse.json(
        {
          success: false,
          message: "SMTP test failed",
          error: (error as Error).message,
          stack: (error as Error).stack,
          config: {
            host,
            port,
            secure: port === "465",
            from: user,
            to,
          },
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
        stack: (error as Error).stack,
      },
      { status: 500 },
    )
  }
}
