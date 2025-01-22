import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { FaDiscord, FaGithub, FaTwitch, FaTwitter ,FaUserTag  , FaWpexplorer , FaSortAmountUp}  from 'react-icons/fa'
const PaymentInfo = () => {
  return (
    <section className="w-full flex flex-col items-center text-center mt-[100px] mb-10">
  <div className="w-full max-w-[1200px] bg-primary-1 shadow-lg mx-auto rounded-lg p-6 hover:shadow-2xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
      <div className="flex justify-center">
        <Image
          src="/images/razorpay.jpg"
          alt="payment"
          width={500}
          height={500}
          className="bg-transparent rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center text-left space-y-4 -mt-[40px]">
        <h1 className="text-4xl font-bold">Payments</h1>
        <p className="text-lg leading-relaxed text-gray-800">
          Seamlessly pay for your haircut appointments using Razorpay, integrated directly into our haircut booking system. 
          Whether you're booking a quick trim or a full makeover, our secure payment system ensures a hassle-free experience. 
          Choose your preferred payment method—credit/debit card, UPI, or net banking—and complete your transaction in seconds. 
          Get ready to step into style with confidence, knowing your payment is fast, secure, and reliable.
        </p>
        <Button className='mt-10 h-12 bg-secondry-1 text-primary-1'>Make your first Payment <span>&#8377;</span> </Button>
      </div>
    </div>
  </div>
</section>

  )
}

export default PaymentInfo