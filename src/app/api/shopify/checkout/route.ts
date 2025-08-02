// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') return res.status(405).end();

//   const { lineItems } = req.body;
//   const url = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_URL

//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_TOKEN!,
//     },
//     body: JSON.stringify({
//       query: `
//         mutation checkoutCreate($lineItems: [CheckoutLineItemInput!]!) {
//           checkoutCreate(input: { lineItems: $lineItems }) {
//             checkout {
//               id
//               webUrl
//             }
//             userErrors {
//               field
//               message
//             }
//           }
//         }
//       `,
//       variables: { lineItems },
//     }),
//   });

//   const shopifyData = await response.json();
//   const webUrl = shopifyData.data?.checkoutCreate?.checkout?.webUrl;
//   res.status(200).json({ webUrl });
// }

import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Not implemented' }, { status: 501 });
}