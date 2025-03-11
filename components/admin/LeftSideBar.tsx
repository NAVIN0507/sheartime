
import { AdminSideBar } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { auth, signOut } from '@/auth';
import { BookmarkX, CalendarCheck, CalendarCog, CalendarSync, CircleDotDashed, CircleUserRound, CircleX, ExternalLink, IndianRupee, LogOut, MessageSquareText, Store, UserPen, UsersRound } from 'lucide-react'
import { redirect } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Session } from 'next-auth'
import Openaing from './Openaing'
const LeftSideBar = ({session}:{session:Session}) => {
  
  if(!session) redirect("/sign-in")
  return (
    <section className='min-h-screen hidden md:block w-[300px] bg-primary-1 top-0 fixed rounded-xl'>
        <div className='flex flex-col'>
            <Link href={"/"} className='flex flex-row -ml-1 mt-5'>
            <Image
            src="/icons/logo-white.svg"
            alt='logo'
            width={120}
            height={150}
            />
            <h1 className='my-auto text-3xl'>SHEARTIME</h1>
            </Link>
            <div className='my-auto mt-10 ml-4'>
            <div className='flex flex-col gap-10'>
              <div className=''>
                <div className='flex flex-row  gap-32 '><h1 className='text-2xl ml-2'>Bookings </h1> <CalendarCog className='right-3 mt-1' /></div>
                 
                <div className='flex flex-col gap-2 ml-7 mt-5'>
             <Link href={`/admin/todaysbooking/${session.user?.id}`}>   <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:underline '><CalendarSync />Today's Bookings</Button></Link>
            <Link href={`/admin/confirmedbooking/${session.user?.id}`}>    <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:underline text-start justify-start'><CalendarCheck />Confirmed Bookings</Button></Link>
               <Link href={`/admin/pendingbooking/${session.user?.id}`}> <Button className='shadow-none w-[180px] h-[40px] text-1xl hhover:underline'><CircleDotDashed />Pending Bookings</Button></Link>
           <Link href={`/admin/cancelledbooking/${session.user?.id}`}>     <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:underline ml-1'><BookmarkX />Cancelled Bookings</Button></Link>
                </div>
                
              </div>
              <div className=''>
                <div className='flex flex-row  gap-28 '><h1 className='text-2xl ml-2'>Customers </h1> <CircleUserRound className='mt-1'/></div>
                <div className='flex flex-col gap-2 ml-7 mt-5'>
                  <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:underline -ml-1'><UsersRound />Your Customers</Button>
                <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:underline ml-3'><MessageSquareText />Customers FeedBack</Button>
                <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:underline ml-3'><IndianRupee />Customer Payments</Button>
                
                </div>
                
              </div>
               <div className=''>
                <div className='flex flex-row  gap-28 '><h1 className='text-2xl ml-2'>Your Shop </h1> <Store className='mt-1'/></div>
                <div className='flex flex-col gap-2 ml-7 mt-5 justify-start'>
                <Link href={`/admin/yourprofile/${session.user?.id}`}>  <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:underline  text-start justify-start'><UserPen />Your Profile</Button></Link>
                <Dialog>
  <DialogTrigger>
    <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:underline -ml-5'><CircleX />Close Customer Bookings</Button>
  </DialogTrigger>
  <DialogContent >
    <DialogTitle>Close Bookings for customers</DialogTitle>
<Openaing type='CLOSE' id={session.user?.id!}/>
  </DialogContent>
</Dialog>
<Dialog>
              <DialogTrigger>
    <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:underline -ml-5'><ExternalLink />Open Customer Bookings</Button>
  </DialogTrigger>
  <DialogContent >
    <DialogTitle>Open Bookings for customers</DialogTitle>
<Openaing type='OPEN' id={session.user?.id!}/>
  </DialogContent>
</Dialog>
            
               
                
                </div>
                
              </div>
            </div>
            <div className='mt-10 mx-auto items-center justify-center ml-3'>
            <form action={async()=>{
              "use server";
              await signOut();
            }}
            >
                <Button className='w-[250px] h-[50px] mx-auto bg-secondry-1 text-primary-1 text-1xl'><LogOut />Log out</Button>
            </form>
            </div>
            </div>
        </div>
    </section>
  )
}

export default LeftSideBar