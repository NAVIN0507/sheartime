"use client"
import { NavItems } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Typewriter from './fancy/typewriter'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Navbar = () => {
    const pathname = usePathname();
  return (
   <nav className='w-full p-3 text-center items-center top-0 bg-primary-1 shadow-md'>
<div className='relative flex h-16 items-center justify-between'>
    
    <Link href="/" className='flex flex-row gap-3 text-center'>
    <Image
    src="/icons/logo-white.svg"
    alt='logo'
    width={100}
    height={100}

    />
  <Typewriter
          text={[
           "SHEARTIME",
           
          ]}
          speed={70}
          className="text-black text-2xl mt-5 font-bold"
          waitTime={3500}
          deleteSpeed={40}
          cursorChar={""}
        />
    </Link>
    <div className='flex flex-row items-end text-end mr-7 hidden sm:block'>
        <ul className='flex flex-row gap-5  text-[20px]'>
            {NavItems.map((itme)=>{
                const isActive = pathname === itme.route || pathname.includes(itme.route)
                console.log(isActive)
                return(
                <Button className={cn( isActive ? 'bg-secondry-1 text-primary-1' : `border-none bg-none text-[17px] cursor-pointer rounded-lg shadow-none  hover:text-secondry-1 
                hover:underline hover:-translate-y-2 duration-500 ease-in-out`)} asChild key={itme.name}>
                <li><Link href={itme.route}>{itme.name}</Link></li>
                </Button>
)})}
        </ul>
    </div>
</div>
   </nav>
  )
}

export default Navbar