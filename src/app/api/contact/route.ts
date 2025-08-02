// // pages/api/contact.ts
// import type { NextApiRequest, NextApiResponse } from 'next'

// type ContactFormData = {
//   name: string
//   email: string
//   phone: string
//   message: string
// }

// type ApiResponse = { success: true } | { success: false; error: string }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ApiResponse>
// ) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ success: false, error: 'Method Not Allowed' })
//   }

//   const { name, email, phone, message } = req.body as ContactFormData

//   // Basic validation
//   if (!name || !email || !phone || !message) {
//     return res.status(400).json({ success: false, error: 'All fields are required.' })
//   }

//   // TODO: Integrate with email service (SendGrid, Mailgun, etc.)
//   // For now, we'll just log to the server console:
//   console.log('New contact submission:', { name, email, phone, message })

//   return res.status(200).json({ success: true })
// }

import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Not implemented' }, { status: 501 });
}