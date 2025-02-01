"use client"
import { useState } from 'react';

const PaymentPage = () => {
  const [amount, setAmount] = useState<string>('');

  const handlePayment = async () => {
    if (!amount) return alert('Please enter an amount');

    const res = await fetch('/api/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: Number(amount),
        currency: 'INR',
        receipt: 'receipt#1',
      }),
    });

    const order = await res.json();
    if (!order.id) return alert('Failed to create order');

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
      amount: order.amount,
      currency: order.currency,
      name: 'Your Company Name',
      description: 'Test Transaction',
      order_id: order.id,
      handler: (response: any) => {
        alert('Payment successful!');
        console.log(response);
      },
      prefill: {
        name: 'Test User',
        email: 'test.user@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Pay with Razorpay</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount"
        style={{ padding: '10px', marginBottom: '10px' }}
      />
      <br />
      <button onClick={handlePayment} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
