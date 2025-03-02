
import React from "react";
import Script from "next/script";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getBookingByUserId, getShopsByShopId, getUserById } from "@/lib/actions/user.action";
import { formatDateTime } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Loader2, TriangleAlert } from "lucide-react";
import PaymentButton from "@/components/customers/PaymentButton";
import DeleteButton from "@/components/customers/DeleteButton";
declare global{
  interface Window{
    Razorpay:any;
  }
}
const PaymentPage = async()=>{
   const session = await auth();
    if(!session) return redirect("/sign-in");
    const bookings = await getBookingByUserId(session.user?.id!);
    if(!bookings) return null;
  const AMOUNT = 100;
  
  const handlePayment = async()=>{
    
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
    
    }
  }

  return(
    <div className="-mt-16" >
      <Script src="https://checkout.razorpay.com/v1/checkout.js"/>
      
         
        <div className='mt-20 flex flex-col gap-5'>
            {bookings.map(async(booking)=>{
                const shop = await getShopsByShopId(booking.shopId)
                if(!shop) return null; //
                const user = await getUserById(booking.userId);
                if(!user) return null;
                console.log(shop[0].shopName)

                return(
                        <div className='flex flex-row gap-10 w-full h-[80px] bg-primary-1 border-b-2 rounded-xl text-center  items-center'>
                           
                          <h1 className='w-full text-2xl font-extralight flex flex-row gap-2 ml-5'>
                           {shop[0].shopName}</h1>
                            <h1 className='w-full text-2xl font-extralight'>{formatDateTime(booking.bookingDate).dateTime}</h1>
                          
                            <h1 className='w-full'>
                                {booking.amountStatus === 'PAID' ? (<>
                                <Button className='w-[150px] h-[50px] bg-gray-300 text-1xl rounded-full border-none shadow-none' disabled><BadgeCheck /> Paid</Button>
                                </>) :(<>
                                <Button className='w-[150px] h-[50px] bg-red-400 text-1xl rounded-full border-none shadow-none'><TriangleAlert />Not Paid</Button>
                                </>)}
                            </h1>
                              <h1 className='w-full'>
                                {booking.amountStatus === 'PAID' ? (<>
                                <DeleteButton id={session.user?.id!}/>
                                 </>) :(<><PaymentButton userName={user.fullName} userEmail={user.email} userMobile={user.phone} id={session.user?.id!}/></>)}
                           
                               
                            </h1>
                          
                        </div>
                )
            })}
        </div>
    
    </div>
  )
}
export default PaymentPage