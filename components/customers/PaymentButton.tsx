"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { db } from '@/database/drizzle';
import { bookings } from '@/database/schema';
import { eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';
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
   <Button className='w-[150px] h-[50px] text-1xl bg-secondry-1 text-white rounded-full' onClick={handlePayment}>{isPaying?'Processing...' :'Pay Now'}</Button>
  )
}

export default PaymentButton