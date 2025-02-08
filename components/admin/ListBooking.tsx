import { getBookingByShopId, getShopId } from '@/lib/actions/admin.action'
import { getUserById } from '@/lib/actions/user.action';
import { formatDateTime } from '@/lib/utils';
import React from 'react'
import Bookings from './Bookings';

const ListBooking = async({id}:{id:string}) => {
    const shopId = await getShopId(id);
    if(!shopId) return null;
    const bookings = await getBookingByShopId(shopId);
    if(!bookings) return <h1>No Bookings</h1>
    
  return (
    <div className='mt-10 mx-auto ml-2 right-5'>
        <h1 className='text-3xl ml-7 underline'>Today's Bookings</h1>
        <div className='flex flex-col gap-14  mt-10'>
            {bookings.map(async(booking)=>{
                const user = await getUserById(booking.userId);
                return(
                  
                        <Bookings
                         fullName={user?.fullName!}
                         bookingDate={booking.bookingDate}
                         />
                   
                )
            })}
        </div>
    </div>
  )
}

export default ListBooking