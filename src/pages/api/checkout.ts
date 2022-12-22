import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../lib/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { priceId } = req.body
  console.log(priceId)

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Should not be here.' })
  }

  if (!priceId) {
    return res.status(400).json({ error: 'Should not be here.' })
  }

  const successUrl = `${process.env.NEXT_URL}/success`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'payment',
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
