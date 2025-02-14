import { formatDateTime } from '@/lib/utils';
import React from 'react'
import { Button } from '../ui/button';
import { Check, Loader2, X } from 'lucide-react';

const Bookings = ({fullName , bookingDate , bookingStatus}:{fullName:string;bookingDate:string; bookingStatus:string}) => {
  const StatusButton = (Status : string)=>{
    switch (Status) {
      case 'PENDING':
         return(
          <Button className='w-[150px] h-[50px] bg-gray-400 -mt-2 font-bold text-1xl rounded-full border-none shadow-none text-white ml-2' disabled>{bookingStatus}  <Loader2 className='animate-spin'/></Button>
         )
         break;
      case 'BOOKED':
        return(
          <Button className='w-[150px] h-[50px] bg-green-500 -mt-2 font-bold text-1xl rounded-full border-none shadow-none text-white' disabled>Booked</Button>
        )
    
      default:
        return(
          <Button className='w-[150px] h-[50px] bg-red-500 -mt-2 font-bold text-1xl rounded-full border-none shadow-none ml-2 text-white' disabled>Cancelled</Button>
        )
        break;
    }
  }
  return (
    <div className='w-[1480px] h-[120px] border-b-2 -mt-1 mx-auto rounded-xl  flex flex-row justify-between'>
                        
                        <div className='flex flex-col my-auto mt-5'>
                            <div className='flex flex-row mt-7 ml-7'>
                            <h1 className='text-2xl text-black truncate'>{fullName}</h1>
                            <h1 className='text-2xl text-black ml-14'>{formatDateTime(bookingDate).dateTime}</h1>
                            <h1 className='ml-14'>{StatusButton(bookingStatus)}</h1>
                            </div>
                        </div>
                        <div className='flex flex-row  mt-[50px] ml-7 gap-5'>
                          <Button className='w-[50px] h-[50px] border-2 border-green-500 -mt-2 font-bold text-1xl rounded-full shadow-none'><Check size={30}/></Button>
                          <Button className='w-[50px] h-[50px] border-2 border-red-500 -mt-2 font-bold text-1xl rounded-full  shadow-none'><X /></Button>
                        </div>
                    </div>
  )
}

export default Bookings