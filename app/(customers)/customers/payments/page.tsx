//this is payment page for customer 
import React from "react";
import Script from "next/script";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getAllBookingByUserId, getBookingByUserId, getShopsByShopId, getUserById } from "@/lib/actions/user.action";
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
    const bookings = await getAllBookingByUserId(session.user?.id!);
    if(!bookings) return null;
  const AMOUNT = 100;

  return(
    <div className="-mt-16" >
      <Script src="https://checkout.razorpay.com/v1/checkout.js"/>
      
         
        <div className='mt-20 flex flex-col gap-5'>
            <h1 className='p-5 text-4xl -mt-2
              mb-10 
               text-black
               font-mono'>Payments</h1>
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
                                 </>) :(<><PaymentButton userName={user.fullName} userEmail={user.email} userMobile={user.phone} id={booking.id}/></>)}
                           
                               
                            </h1>
                          
                        </div>
                )
            })}
        </div>
    
    </div>
  )
}
export default PaymentPage