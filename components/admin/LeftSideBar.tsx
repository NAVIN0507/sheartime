import { AdminSideBar } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { CalendarSync } from 'lucide-react'

const LeftSideBar = () => {
  return (
    <section className='min-h-screen w-[300px] bg-primary-1 top-0 fixed'>
        <div className='flex flex-col'>
            <Link href={"/"} className='flex flex-row -ml-1 mt-5 border-b-2'>
            <Image
            src="/icons/logo-white.svg"
            alt='logo'
            width={120}
            height={150}
            />
            <h1 className='my-auto text-3xl'>SHEARTIME</h1>
            </Link>
            <div className='my-auto mt-20 ml-2'>
            <div className='flex flex-col gap-10'>
              <div className=''>
                <h1 className='text-2xl ml-2'>Bookings</h1>
                <div className='flex flex-col gap-2 ml-7 mt-5'>
                <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:bg-secondry-1 hover:ease-in-out hover:text-primary-1'><CalendarSync />Today's Bookings</Button>
                <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:bg-secondry-1 hover:ease-in-out hover:text-primary-1 ml-3'><CalendarSync />Confirmed Bookings</Button>
                <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:bg-secondry-1 hover:ease-in-out hover:text-primary-1'><CalendarSync />Pending Bookings</Button>
                <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:bg-secondry-1 hover:ease-in-out hover:text-primary-1 ml-1'><CalendarSync />Cancelled Bookings</Button>
                </div>
                
              </div>
              <div className=''>
                <h1 className='text-2xl ml-2'>Customers</h1>
                <div className='flex flex-col gap-2 ml-7 mt-5'>
                  <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:bg-secondry-1 hover:ease-in-out hover:text-primary-1'><CalendarSync />Today's Bookings</Button>
                <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:bg-secondry-1 hover:ease-in-out hover:text-primary-1 ml-3'><CalendarSync />Confirmed Bookings</Button>
                <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:bg-secondry-1 hover:ease-in-out hover:text-primary-1'><CalendarSync />Pending Bookings</Button>
                <Button className='shadow-none w-[180px] h-[40px] text-1xl hover:bg-secondry-1 hover:ease-in-out hover:text-primary-1 ml-1'><CalendarSync />Cancelled Bookings</Button>
                </div>
              </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default LeftSideBar