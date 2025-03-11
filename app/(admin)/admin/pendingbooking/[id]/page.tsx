import BookingCountCard from '@/components/admin/BookingCountCard';
import Bookings from '@/components/admin/Bookings';
import { getBookingByType, getShopId, pendingBooking } from '@/lib/actions/admin.action'
import { getUserById } from '@/lib/actions/user.action';
import { LoaderCircleIcon } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async({params}:{params:{id:string}}) => {
  const shopId = await getShopId(params.id);
    if(!shopId) return redirect("/sign-in");
    const bookings = await getBookingByType({shopId:shopId , type:'PENDING'})
    if(!bookings) return null;
    const bookingCount =  await pendingBooking(shopId);
  return (
   <section className='-mt-16 ml-12'>
    <div>
      <div className='justify-between items-center flex'>
        <h1 className='font-mono text-3xl p-4'>Pending  Bookings</h1>
        <BookingCountCard type='pendings' typeName='pendings' count={bookingCount} icon={<LoaderCircleIcon/>} className='bg-blue-200'/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
      {bookings.map(async(booking)=>{
                const user = await getUserById(booking.userId);
                return(
                  <div>
                        <Bookings
                         fullName={user?.fullName!}
                         bookingDate={booking.bookingDate}
                         bookingStatus = {booking.bookingStatus!}
                         userPhone = {user?.phone!}
                         bookingId = {booking.id}
                         />
                         </div>
                   
                )
            })}
            </div>
    </div>
   </section>
  )
}

export default page