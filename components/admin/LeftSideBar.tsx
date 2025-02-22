import { AdminSideBar } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { CalendarCog, CalendarSync, CircleUserRound, LogOut, Store } from 'lucide-react'

const LeftSideBar = () => {
  return (
    <section className='min-h-screen w-[300px] bg-primary-1 top-0 fixed rounded-xl'>
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
                <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:underline '><CalendarSync />Today's Bookings</Button>
                <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:underline text-start justify-start'><CalendarSync />Confirmed Bookings</Button>
                <Button className='shadow-none w-[180px] h-[40px] text-1xl hhover:underline'><CalendarSync />Pending Bookings</Button>
                <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:underline ml-1'><CalendarSync />Cancelled Bookings</Button>
                </div>
                
              </div>
              <div className=''>
                <div className='flex flex-row  gap-28 '><h1 className='text-2xl ml-2'>Customers </h1> <CircleUserRound className='mt-1'/></div>
                <div className='flex flex-col gap-2 ml-7 mt-5'>
                  <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:underline -ml-1'><CalendarSync />Your Customers</Button>
                <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:underline ml-3'><CalendarSync />Customers FeedBack</Button>
                <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:underline ml-3'><CalendarSync />Customer Payments</Button>
                
                </div>
                
              </div>
               <div className=''>
                <div className='flex flex-row  gap-28 '><h1 className='text-2xl ml-2'>Your Shop </h1> <Store className='mt-1'/></div>
                <div className='flex flex-col gap-2 ml-7 mt-5 justify-start'>
                  <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:underline  text-start justify-start'><CalendarSync />Your Profile</Button>
                <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:underline text-start justify-start'><CalendarSync />Close Customer Bookings</Button>
                <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:underline text-start justify-start'><CalendarSync /> Open Customer Bookings</Button>
                
                </div>
                
              </div>
            </div>
            <div className='mt-10 mx-auto items-center justify-center ml-3'>
              <Button className='w-[250px] h-[50px] mx-auto bg-secondry-1 text-primary-1 text-1xl'><LogOut />Log out</Button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default LeftSideBar