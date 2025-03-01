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
    <div className=''>
    
        <div className='flex flex-col gap-14 '>
          <div className=' mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {bookings.map(async(booking)=>{
                const user = await getUserById(booking.userId);
                return(
                  
                        <Bookings
                         fullName={user?.fullName!}
                         bookingDate={booking.bookingDate}
                         bookingStatus = {booking.bookingStatus!}
                         userPhone = {user?.phone!}
                         bookingId = {booking.id}
                         />
                         
                   
                )
            })}
            </div>
            </div>
        </div>
    </div>
  )
}

export default ListBooking