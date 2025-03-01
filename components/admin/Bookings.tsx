"use client"
import { formatDateTime } from '@/lib/utils';
import React from 'react'
import { Button } from '../ui/button';
import { Check, CheckCheck, Ellipsis, Eye, Loader, Loader2, LoaderCircle, X } from 'lucide-react';
import {motion} from "framer-motion"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cancelBooking, sheduleBookings } from '@/lib/actions/admin.action';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
const Bookings = ({fullName , bookingDate , bookingStatus , userPhone , bookingId}:{fullName:string;bookingDate:string; bookingStatus:string; userPhone:string; bookingId:string}) => {
  const StatusButton = (Status : string)=>{
    switch (Status) {
      case 'PENDING':
         return(
          <Button className='w-[50px] h-[50px] bg-gray-400  -mt-3  font-bold text-1xl rounded-full border-none shadow-none text-black' ><LoaderCircle size={30} className='animate-spin' /></Button>
         )
         break;
      case 'BOOKED':
        return(
          <Button className='w-[50px] h-[50px] bg-green-400 -mt-3 font-bold text-1xl rounded-full border-none shadow-none text-white' ><CheckCheck size={20} className='animate-bounce' color='#000'/></Button>
        )
    
      default:
        return(
          <Button className='w-[50px] h-[50px] bg-red-400 -mt-3  font-bold text-1xl rounded-full border-none shadow-none  text-white' ><X className='animate-ping' size={20} color='#000'/></Button>
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
        <div className='w-full md:w-full h-24 bg-primary-1 shadow-xl rounded-xl cursor-pointer'>
    <div className='flex justify-between gap-1 p-10'>
      {StatusButton(bookingStatus)}
      
      <h1>{fullName}</h1>
      <h2>{formatDateTime(bookingDate).dateTime}</h2>
      <Eye />
      <Ellipsis />
      
    </div>
  </div>

  </motion.div>
  )
}

export default Bookings