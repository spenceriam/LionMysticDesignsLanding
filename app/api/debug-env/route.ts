import { NextResponse } from "next/server"

export async function GET() {
  // Check if environment variables exist
  const envVars = {
    EMAIL_HOST_EXISTS: !!process.env.EMAIL_HOST,
    EMAIL_PORT_EXISTS: !!process.env.EMAIL_PORT,
    EMAIL_USER_EXISTS: !!process.env.EMAIL_USER,
    EMAIL_PASS_EXISTS: !!process.env.EMAIL_PASS,
    EMAIL_TO_EXISTS: !!process.env.EMAIL_TO,
    // Show first few characters of EMAIL_HOST if it exists (for verification)
    EMAIL_HOST_PREFIX: process.env.EMAIL_HOST ? process.env.EMAIL_HOST.substring(0, 5) + "..." : "not set",
    NODE_ENV: process.env.NODE_ENV || "not set",
    VERCEL_ENV: process.env.VERCEL_ENV || "not set",
  }

  return NextResponse.json(envVars)
}
