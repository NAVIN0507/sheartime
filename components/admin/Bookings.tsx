"use client"
import { formatDateTime } from '@/lib/utils';
import React from 'react'
import { Button } from '../ui/button';
import { Check, Loader2, X } from 'lucide-react';
import {motion} from "framer-motion"
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
  <motion.div
        initial={{opacity:0 , y:20}}
        transition={{duration:0.5}}
        whileInView={{opacity:1 , y:0}}
        viewport={{once:true}}
        >
  <div className='w-full md:w-full h-24 bg-primary-1 shadow-xl rounded-xl'>
    <div className='flex justify-between gap-2'></div>
  </div>
  </motion.div>
  )
}

export default Bookings