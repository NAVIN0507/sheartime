import { formatDateTime } from '@/lib/utils';
import React from 'react'
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';

const Bookings = ({fullName , bookingDate , bookingStatus}:{fullName:string;bookingDate:string; bookingStatus:string}) => {
  const StatusButton = (Status : string)=>{
    switch (Status) {
      case 'PENDING':
         return(
          <Button className='w-[150px] h-[50px] bg-blue-400 font-bold text-1xl rounded-full border-none shadow-none' disabled>{bookingStatus}  <Loader2 className='animate-spin'/></Button>
         )
         break;
      case 'BOOKED':
        return(
          <Button>Booked</Button>
        )
    
      default:
        return(
          <Button>Cancelled</Button>
        )
        break;
    }
  }
  return (
    <div className='w-[1420px] h-[120px] border-b-2 mx-auto rounded-xl'>
                        
                        <div className='flex flex-col my-auto mt-5'>
                            <div className='flex flex-row mt-7 ml-7'>
                            <h1 className='text-2xl text-black truncate'>{fullName}</h1>
                            <h1 className='text-2xl text-black ml-14'>{formatDateTime(bookingDate).dateTime}</h1>
                            <h1 className='ml-14'>{StatusButton(bookingStatus)}</h1>
                            </div>
                        </div>
                    </div>
  )
}

export default Bookings