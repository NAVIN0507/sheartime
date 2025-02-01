"use client";
import React , {useState} from "react";
import Script from "next/script";
declare global{
  interface Window{
    Razorpay:any;
  }
}
const PaymentPage = ()=>{
  const AMOUNT = 100;
  const [isProcesing, setisProcesing] = useState(false);
  const handlePayment = async()=>{
    setisProcesing(true);
    try {
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
          setisProcesing(false);

        },
        prefill:{
          name:'John Doe',
          email:'John.Doe@example.com',
          contact:'9999999999'
        },
        theme:{
          color:'#3399cc'
        }
         
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.log(error);
    }
    finally{
      setisProcesing(false);
    }
  }
  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Script src="https://checkout.razorpay.com/v1/checkout.js"/>
      <div className="p-6 bg-white rounded-lg shadow-md ">
        <h1 className="text-2xl font-bold mb-4">Payment page</h1>
        <p className="mb-4">Amount to pay : {AMOUNT} INR</p>
        <button onClick={handlePayment} disabled={isProcesing} className="px-4 py-2 bg-blue-500 text-white rounded">{isProcesing ? "Processing..." :"PayNow"}</button>
      </div>
    </div>
  )
}
export default PaymentPage