import Bookings from '@/components/admin/Bookings';
import { getBookingByType, getShopId } from '@/lib/actions/admin.action'
import { getUserById } from '@/lib/actions/user.action';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async({params}:{params:{id:string}}) => {
  const shopId = await getShopId(params.id);
    if(!shopId) return redirect("/sign-in");
    const bookings = await getBookingByType({shopId:shopId , type:'PENDING'})
    if(!bookings) return null;
  return (
   <section className='-mt-16 ml-12'>
    <div>
        <h1 className='font-mono text-3xl p-4'>Confirmed Bookings</h1>
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