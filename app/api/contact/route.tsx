import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
    }

    // Debug environment variables (safe logging - server-side only)
    console.log("Environment check:")
    console.log("NODE_ENV:", process.env.NODE_ENV)
    console.log(
      "Available env vars containing 'RESEND':",
      Object.keys(process.env).filter((key) => key.includes("RESEND")),
    )

    // Only check for server-side environment variables (no NEXT_PUBLIC_ prefix)
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error("❌ RESEND_API_KEY not found in environment variables")
      console.error("Available environment variables:", Object.keys(process.env).sort())

      return NextResponse.json(
        {
          error: "Email service temporarily unavailable. Please contact us directly via Twitter/X.",
          debug: "RESEND_API_KEY environment variable is missing",
          env_debug: {
            node_env: process.env.NODE_ENV,
            available_resend_vars: Object.keys(process.env).filter((key) => key.includes("RESEND")),
            total_env_vars: Object.keys(process.env).length,
          },
        },
        { status: 500 },
      )
    }

    console.log("✅ Resend API Key found:", resendApiKey.substring(0, 8) + "...")
    console.log("🚀 Attempting to send email via Resend API...")

    // Validate API key format
    if (!resendApiKey.startsWith("re_")) {
      console.error("❌ Invalid Resend API key format")
      return NextResponse.json(
        {
          error: "Email service configuration error",
          debug: "Invalid API key format",
        },
        { status: 500 },
      )
    }

    // Send email using Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Lion Mystic Contact <noreply@lionmystic.com>",
        to: ["contact@lionmystic.com"],
        reply_to: email,
        subject: `Lion Mystic Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #000; color: white; padding: 20px; text-align: center;">
              <h2>🦁 New Contact Form Submission</h2>
            </div>
            <div style="padding: 20px; background: #f9f9f9;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <div style="margin-top: 20px; padding: 15px; background: white; border-left: 4px solid #000;">
                <strong>Message:</strong><br>
                <div style="white-space: pre-wrap; margin-top: 10px;">${message}</div>
              </div>
              <div style="margin-top: 20px; font-size: 12px; color: #666;">
                <p>Submitted: ${new Date().toLocaleString()}</p>
                <p>Reply to: ${email}</p>
                <p>Platform: Netlify</p>
              </div>
            </div>
          </div>
        `,
        text: `
New Contact Form Submission - Lion Mystic

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Submitted: ${new Date().toLocaleString()}
Reply to: ${email}
Platform: Netlify
        `.trim(),
      }),
    })

    const responseData = await resendResponse.json()

    if (!resendResponse.ok) {
      console.error("❌ Resend API Error:", {
        status: resendResponse.status,
        statusText: resendResponse.statusText,
        data: responseData,
      })

      // Handle specific Resend API errors
      let errorMessage = "Failed to send email"
      if (resendResponse.status === 401) {
        errorMessage = "Email service authentication failed - Invalid API key"
      } else if (resendResponse.status === 403) {
        errorMessage = "Email service access denied - Check domain verification"
      } else if (resendResponse.status === 422) {
        errorMessage = "Invalid email configuration - Check from/to addresses"
      } else if (resendResponse.status === 429) {
        errorMessage = "Rate limit exceeded - Please try again later"
      }

      return NextResponse.json(
        {
          error: errorMessage,
          debug: {
            status: resendResponse.status,
            response: responseData,
            api_key_prefix: resendApiKey.substring(0, 8),
          },
        },
        { status: 500 },
      )
    }

    console.log("✅ Email sent successfully via Resend:", responseData)

    return NextResponse.json({
      message: "Message sent successfully! We'll get back to you soon.",
      success: true,
      emailId: responseData.id,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("❌ Contact API Error:", error)

    // Enhanced error logging
    if (error instanceof Error) {
      console.error("Error name:", error.name)
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)
    }

    return NextResponse.json(
      {
        error: "Internal server error. Please contact us directly via Twitter/X.",
        debug: {
          message: error instanceof Error ? error.message : "Unknown error",
          type: error instanceof Error ? error.name : typeof error,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 500 },
    )
  }
}
