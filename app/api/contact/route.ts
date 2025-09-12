// Existing code block from app/api/contact/route.ts
import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-password",
  },
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body

    const mailOptions = {
      from: email,
      to: ["contact@lionmystic.com"], // Updated email destination
      subject: `Message from ${name}`,
      text: message,
    }

    try {
      const info = await transporter.sendMail(mailOptions)
      res.status(200).json({ message: "Email sent successfully", info })
    } catch (error) {
      res.status(500).json({ message: "Error sending email", error })
    }
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}
