"use client"
import { formatDateTime } from '@/lib/utils';
import React from 'react'
import { Button } from '../ui/button';
import { Check, Loader2, X } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cancelBooking, sheduleBookings } from '@/lib/actions/admin.action';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
const Bookings = ({fullName , bookingDate , bookingStatus , userPhone , bookingId}:{fullName:string;bookingDate:string; bookingStatus:string; userPhone:string; bookingId:string}) => {
  const StatusButton = (Status : string)=>{
    switch (Status) {
      case 'PENDING':
         return(
          <Button className='w-[150px] h-[50px] bg-gray-400 -mt-2   font-bold text-1xl rounded-full border-none shadow-none text-white ' disabled>{bookingStatus}  <Loader2 className='animate-spin'/></Button>
         )
         break;
      case 'BOOKED':
        return(
          <Button className='w-[150px] h-[50px] bg-green-500 -mt-2 font-bold text-1xl rounded-full border-none shadow-none text-white' disabled>Booked</Button>
        )
    
      default:
        return(
          <Button className='w-[150px] h-[50px] bg-red-500 -mt-2 font-bold text-1xl rounded-full border-none shadow-none  text-white' disabled>Cancelled</Button>
        )
        break;
    }
  }
  const router = useRouter();
  return (

    <div className='w-[1480px] h-[120px] border-b-2 -mt-1 mx-auto rounded-xl  flex flex-row justify-between'>
                        
                        <div className='flex flex-col my-auto mt-5'>
                           <Table className='hover:bg-none'>

  
  <TableBody>
    <TableRow className='flex flex-row gap-14'>
      <TableCell className="font-medium text-1xl">{fullName}</TableCell>
      <TableCell className='truncate'>{formatDateTime(bookingDate).dateTime}</TableCell>
      <TableCell>{userPhone}</TableCell>
      <TableCell>{StatusButton(bookingStatus)}</TableCell>
      
    </TableRow>
  </TableBody>
</Table>
                        </div>
                        <div className='flex flex-row  mt-[50px] ml-7 gap-5'>
                          
                          <Button className='w-[150px] h-[50px] border-2 border-green-500 -mt-2 font-bold text-1xl rounded-full shadow-none'
                          onClick={async()=>{
                           const res =  await sheduleBookings(bookingId)
                            if(res.success){
                              toast("Scheduled SuccessFully" ,  {position:'top-right' ,
                                className:'bg-green-1 text-white'
                              })
                            router.refresh();
                            }
                            else{

                            }
                          }}
                          ><Check size={30}/>Approve</Button>
                          <Button className='w-[150px] h-[50px] border-2 border-red-500 -mt-2 font-bold text-1xl rounded-full  shadow-none'
                          onClick={async()=>{
                            const res = await cancelBooking(bookingId);
                             if(res.success){
                              toast("Cancelled SuccessFully" ,  {position:'top-right' ,
                                className:'bg-red-400 text-white'
                              })
                            router.refresh();
                            }
                          }}
                          ><X /> Cancel</Button>
                        </div>
                    </div>
  )
}

export default Bookings