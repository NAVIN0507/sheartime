import { NextApiRequest, NextApiResponse } from 'next';
import Razorpay from 'razorpay';

interface RazorpayOrderResponse {
  id: string;
  entity: string;
  amount: number;
  currency: string;
  status: string;
  [key: string]: any;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { amount, currency, receipt } = req.body;

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID as string,
    key_secret: process.env.RAZORPAY_KEY_SECRET as string,
  });

  try {
    const order: RazorpayOrderResponse = await razorpay.orders.create({
      amount: amount * 100, // Razorpay expects amount in paise
      currency,
      receipt,
    });

    res.status(200).json(order);
  } catch (error) {
    console.error('Razorpay Order Creation Error:', error);
    res.status(500).json({ error: 'Failed to create Razorpay order' });
  }
}
