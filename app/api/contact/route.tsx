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

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json(
        {
          error: "Email service not configured",
          debug: "Missing RESEND_API_KEY environment variable",
        },
        { status: 500 },
      )
    }

    console.log("Attempting to send email via Resend API...")

    // Send email using Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
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
        `.trim(),
      }),
    })

    const responseData = await resendResponse.json()

    if (!resendResponse.ok) {
      console.error("Resend API Error:", {
        status: resendResponse.status,
        statusText: resendResponse.statusText,
        data: responseData,
      })

      return NextResponse.json(
        {
          error: "Failed to send email via Resend",
          debug: responseData,
          status: resendResponse.status,
        },
        { status: 500 },
      )
    }

    console.log("Email sent successfully via Resend:", responseData)

    return NextResponse.json({
      message: "Message sent successfully! We'll get back to you soon.",
      success: true,
      emailId: responseData.id,
    })
  } catch (error) {
    console.error("Contact API Error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        debug: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
