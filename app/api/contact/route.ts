import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // In a real implementation, you would send an email here
    // For example, using a service like SendGrid, Mailgun, or AWS SES

    // For now, we'll just log the data and return a success response
    console.log("Contact form submission:", { name, email, message })

    // You would send an email to contact@lionmystic.com here

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error in contact form:", error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}
