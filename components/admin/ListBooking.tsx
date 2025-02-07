import { getBookingByShopId, getShopId } from '@/lib/actions/admin.action'
import { getUserById } from '@/lib/actions/user.action';
import React from 'react'

const ListBooking = async({id}:{id:string}) => {
    const shopId = await getShopId(id);
    if(!shopId) return null;
    const bookings = await getBookingByShopId(shopId);
    if(!bookings) return <h1>No Bookings</h1>
    
  return (
    <div className='mt-16 mx-auto ml-2'>
        <div className='flex flex-col gap-14 mx-auto'>
            {bookings.map(async(booking)=>{
                const user = await getUserById(booking.userId);
                return(
                    <div className='w-[1400px] h-[70px] shadow-2xl mx-auto'>
                        <div className='flex flex-row my-auto mt-5 ml-5'>
                            <div className=''>
                            <h1 className='text-primary-4 text-2xl'>{user?.fullName}</h1>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ListBooking