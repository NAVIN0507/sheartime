"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { db } from '@/database/drizzle';
import { bookings } from '@/database/schema';
import { eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
declare global{
  interface Window{
    Razorpay:any;
  }
}
interface Props{
    userName:string;
    userMobile:string;
    userEmail:string;
    id:string;
}
 

const PaymentButton = ({userName , userEmail , userMobile , id}:Props) => {
    const [isPaying, setisPaying] = useState(false);
    const router = useRouter();
    const handlePayment = async()=>{
    const AMOUNT = 100
    try {
        setisPaying(true)
      const response  = await fetch("/api/create-order" , {method:"POST"});
      const data = await response.json(); 

      //INTILAZI RAZORPAY 
      const options = {
        key:process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount:AMOUNT*100,
        currency:"INR",
        name:"Sheartime",
        description: "Payment for Order",
        order_id: data.orderId,
        handler:function(response:any){
          console.log(response);
          

        },
        prefill:{
          name:userName,
          email:userEmail,
          contact:userMobile
        },
        theme:{
          color:'#3399cc'
        }
         
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      const pay = await db.update(bookings).set({amountStatus :'PAID'}).where(eq(bookings.userId , id));
      router.refresh();

    } catch (error) {
      console.log(error);
    }
    finally{
    setisPaying(false)
    }
  }
  return (
/* From Uiverse.io by Javierrocadev */ 
<button
  className="group w-12 h-12 hover:bg-green-400 relative bg-secondry-1 text-neutral-50 duration-700  font-bold flex justify-start gap-2 items-center p-2 pr-6 m-auto rounded-full border-2 border-gray-400"
  onClick={handlePayment}
>
 <Image src="/images/razorpay.jpg" alt="" fill  className="object-contain rounded-full" />

</button>

  )
}

export default PaymentButton