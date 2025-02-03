import { auth } from '@/auth'

import { deleteBookingById, getBookingByUserId, getShopsByShopId } from '@/lib/actions/user.action';
import { formatDateTime } from '@/lib/utils';
import React from 'react'
import { Button } from '@/components/ui/button';
import { BadgeCheck, Loader2, Trash, TriangleAlert } from 'lucide-react';
import DeleteButton from '@/components/customers/DeleteButton';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';

const page = async() => {
    const session = await auth();
    const result = await getBookingByUserId(session?.user?.id || '');
    //@ts-ignore
    if (!result) return <h1>No bookings found</h1>
    const handleDelete  = async()=>{}
  return (
    <section className='flex flex-col gap-1'>
        <h1 className='text-4xl'>Pending Bookings</h1>
        <div className='mt-20 flex flex-col gap-5'>
            {result.map(async(bookings)=>{
                const shop = await getShopsByShopId(bookings.shopId);
                if(!shop) return null; //
                console.log(shop[0].shopName)

                return(
                        <div className='flex flex-row gap-10 w-full h-[80px] bg-primary-1 border-b-2 rounded-xl text-center  items-center'>
                           
                          <h1 className='w-full text-2xl flex flex-row gap-2 ml-5'>
                           {shop[0].shopName}</h1>
                            <h1 className='w-full text-2xl'>{formatDateTime(bookings.bookingDate).dateTime}</h1>
                            <h1 className='w-full'>
                                <Button className='w-[150px] h-[50px] bg-blue-400 text-1xl rounded-full border-none shadow-none'>{bookings.bookingStatus}  <Loader2 className='animate-spin'/></Button>
                               
                            </h1>
                            <h1 className='w-full'>
                                {bookings.amountStatus === 'PAID' ? (<>
                                <Button className='w-[150px] h-[50px] bg-green-400 text-1xl rounded-full border-none shadow-none'><BadgeCheck /> Paid</Button>
                                </>) :(<>
                                <Button className='w-[150px] h-[50px] bg-red-400 text-1xl rounded-full border-none shadow-none'><TriangleAlert /> Not Paid</Button>
                                </>)}
                            </h1>
                           <DeleteButton id={bookings.id}/>
                        </div>
                )
            })}
        </div>
    </section>
  )
}

export default page