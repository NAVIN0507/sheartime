import BookingCountCard from '@/components/admin/BookingCountCard';
import Bookings from '@/components/admin/Bookings';
import { cancelledBooking, getBookingByType, getShopId } from '@/lib/actions/admin.action'
import { getUserById } from '@/lib/actions/user.action';
import { CircleX } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async({params}:{params:{id:string}}) => {
  const shopId = await getShopId(params.id);
    if(!shopId) return redirect("/sign-in");
    const bookings = await getBookingByType({shopId:shopId , type:'CANCLED'})
    if(!bookings) return null;
    const bookingCount  =  await cancelledBooking(shopId)
  return (
   <section className='-mt-16 ml-12'>
    <div>
        <div className='justify-between items-center  flex'>
        <h1 className='font-mono text-3xl p-4'>Cancelled Bookings</h1>
        <BookingCountCard type='cancel' typeName='cancel' count={bookingCount} icon={<CircleX />} className='bg-red-200'/>
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