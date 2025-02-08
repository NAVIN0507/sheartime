import { formatDateTime } from '@/lib/utils';
import React from 'react'

const Bookings = ({fullName , bookingDate}:{fullName:string;bookingDate:string}) => {
  return (
    <div className='w-[620px] h-[300px] shadow-2xl mx-auto rounded-xl'>
                        
                        <div className='flex flex-col my-auto mt-5'>
                            <div className='flex flex-col mt-10 ml-10 gap-7'>
                            <h1 className='text-2xl  w-full'>{fullName}</h1>
                            <h1 className='text-2xl my-auto'>{formatDateTime(bookingDate).dateTime}</h1>
                            </div>
                        </div>
                    </div>
  )
}

export default Bookings