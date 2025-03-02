"use client"
import { formatDateTime, getIntials } from '@/lib/utils';
import React from 'react'
import { Button } from '../ui/button';
import { Check, CheckCheck, Ellipsis, Eye, Loader, Loader2, LoaderCircle, X } from 'lucide-react';
import {motion} from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
import GreenBanner from '../svg/GreenBanner';
const Bookings = ({fullName , bookingDate , bookingStatus , userPhone , bookingId}:{fullName:string;bookingDate:string; bookingStatus:string; userPhone:string; bookingId:string}) => {
  const StatusButton = (Status : string)=>{
    switch (Status) {
      case 'PENDING':
         return(
          <Button className='w-[50px] h-[50px] bg-yellow-400   -mt-3  font-bold text-1xl rounded-full border-none shadow-none text-black' ><LoaderCircle size={30} className='animate-spin' /></Button>
         )
         break;
      case 'BOOKED':
        return(
          <Button className='w-[50px] h-[50px] bg-green-400 -mt-3 font-bold text-1xl rounded-full border-none shadow-none text-white' ><CheckCheck size={20} className='animate-bounce' color='#000'/></Button>
        )
    
      default:
        return(
          <Button className='w-[50px] h-[50px] bg-red-400 -mt-3  font-bold text-1xl rounded-full border-none shadow-none  text-white' ><X className='animate-bounce' size={20} color='#000'/></Button>
        )
        break;
    }
  }
  const Banner = (st :string)=>{
    switch (st) {
      case 'PENDING':
        return(
           <div className={`w-full h-24 rounded-lg bg-yellow-100`}>
      <section className="dots-container">
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
</section>
    </div> 
        )
        break;
        case 'BOOKED':
          return(
              <div className={`w-full h-24 rounded-lg items-center justify-center bg-green-100`}>
     <GreenBanner/>
    </div>
          )
          break;
    
      default:
        return(
            <div className={`w-full h-24 rounded-lg bg-red-100`}>
     
    </div>
        )
        break;
    }
  }
  const router = useRouter();
  const approveBooking =  async()=>{
    const res   =await sheduleBookings(bookingId);
    if(!res) return null;
    router.refresh()
  }
  const rejectBooking = async()=>{
    const res =  await cancelBooking(bookingId);
    if(!res) return null;
    router.refresh();
  }
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
      
      <h1 className='text-1xl'>{fullName}</h1>
      <h2>{formatDateTime(bookingDate).dateTime}</h2>
      <Dialog>
  <DialogTrigger> <Eye className='-mt-3'/></DialogTrigger>
  <DialogContent>
    <DialogHeader>
     
    </DialogHeader>
    {Banner(bookingStatus)}
  <div className='flex -mt-14 ml-5  flex-col gap-3'>
      <div className='w-[80px] h-[80px] rounded-full bg-blue-300'>
        <h1 className='text-3xl text-center justify-center p-4 mt-1'>{getIntials(fullName)}</h1>
      </div>
      <div className='flex gap-5 text-xl px-3 mt-3'>
      <p>{fullName}</p>
      <p className={`text-yellow-500 ${bookingStatus==='BOOKED' ? 'text-green-500':'text-red-500'}`}>{bookingStatus}</p>
      </div>
      <div className='flex gap-5 px-3 text-xl'>
      <p>{formatDateTime(bookingDate).dateTime}</p>
      <p>{userPhone}</p>
      </div>
      <div className='flex gap-5 mt-2 px-3'>
        <Button className='p-5 text-white bg-green-400 border-none shadow-none'>Approve</Button>
        <Button className='p-5 text-white bg-red-400 border-none shadow-none'>Cancel</Button>
      </div>
    </div>
  </DialogContent>
</Dialog>
     
      
      <DropdownMenu>
  <DropdownMenuTrigger className='border-none'><Ellipsis className='-mt-3'/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <div className='group'>
    <DropdownMenuItem onClick={()=>approveBooking()} className='text-green-400 cursor-pointer group-hover:bg-green-400 group-hover:text-white'>Approve</DropdownMenuItem>
    <DropdownMenuItem className='bg-red-400 cursor-pointer group-hover:text-red-400 group-hover:bg-primary-1' onClick={()=>rejectBooking()}>Cancel</DropdownMenuItem>
    </div>
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  </div>

  </motion.div>
  )
}

export default Bookings