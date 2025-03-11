import { auth } from '@/auth'

import { deleteBookingById, getBookingByUserId, getShopsByShopId } from '@/lib/actions/user.action';
import { formatDateTime } from '@/lib/utils';
import React from 'react'
import { Button } from '@/components/ui/button';
import { BadgeCheck, Loader2, Trash, TriangleAlert } from 'lucide-react';
import DeleteButton from '@/components/customers/DeleteButton';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';
import FeedBackCard from '@/components/customers/FeedBackCard';

const page = async() => {
    const session = await auth();
    const result = await getBookingByUserId(session?.user?.id || '');
    //@ts-ignore
    if (!result) return <h1>No bookings found</h1>
    const handleDelete  = async()=>{}
  return (
    <section className='flex flex-col gap-1 -mt-16'>
     
        <div className='mt-20 flex flex-col gap-5 justify-between'>
               <h1 className='p-5 text-4xl -mt-2
              mb-10 
               text-black
               font-mono'>Pending Bookings</h1>
            {result.map(async(bookings)=>{
                const shop = await getShopsByShopId(bookings.shopId);
                if(!shop) return null; //
                console.log(shop[0].shopName)

                return(
                        <div className='flex flex-row gap-10 w-full h-[80px] bg-primary-1 border-b-2 rounded-xl  justify-between'>
                           
                          <h1 className='w-full text-2xl font-light flex flex-row gap-2 ml-5 truncate'>
                           {shop[0].shopName}</h1>
                            <h1 className='w-full text-2xl font-light'>{formatDateTime(bookings.bookingDate).dateTime}</h1>
                            <h1 className='w-full'>
                                <Button className='w-[150px] h-[50px] bg-blue-400 font-bold text-1xl rounded-full border-none shadow-none' disabled>{bookings.bookingStatus}  <Loader2 className='animate-spin'/></Button>
                               
                            </h1>
                            <h1 className='w-full'>
                                {bookings.amountStatus === 'PAID' ? (<>
                                <Button className='w-[150px] h-[50px] bg-secondry-4 text-white text-1xl rounded-full border-none shadow-none' disabled><BadgeCheck /> Paid</Button>
                                </>) :(<>
                                <Button className='w-[150px] h-[50px] bg-red-400 text-1xl rounded-full border-none shadow-none' disabled><TriangleAlert /> Not Paid</Button>
                                </>)}
                            </h1>
                            <FeedBackCard userId={session?.user?.id!} shopId={shop[0].id} />
                            <div className='mr-6'>
 <DeleteButton id={bookings.id}/>
                            </div>
                          
                        </div>
                )
            })}
        </div>
    </section>
  )
}

export default page