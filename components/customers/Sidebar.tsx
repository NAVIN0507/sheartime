"use client"
import { sidebarLinks } from '@/constants'
import { cn, getIntials } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'
import { Avatar } from '../ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { Session } from 'next-auth'

const Sidebar = ({session}:{session : Session}) => {
  if(!session) return null;
  const pathname = usePathname();
  
  return (
<section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-primary-1 shadow-lg p-6 pt-32 text-black max-sm:hidden lg:w-[400px] '>
  <div className='flex flex-row gap-2 w-[370px] h-[60px] rounded-full items-start  justify-start  -ml-4 cursor-pointer mt-10  '>
  <div className='mt-2 flex flex-row gap-4 text-lg ml-2'>
 <Button className='w-[100px] h-[100px] bg-violet-400'>
 <h1 className='text-3xl'> {getIntials(session.user?.name || '')} </h1>
 </Button>
   <div className='flex flex-col max-md:hidden  mt-5'>
                <p className='font-light text-2xl text-dark-200'>{session?.user?.name}</p>
                <p className='text-1xl text-light-500'>{session?.user?.email}</p>
            </div>
</div>
</div>
  <div className='flex flex-1 flex-col gap-6 mt-36'>

    <Link href={`/customers/${session.user?.id}`}  className='flex flex-row gap-4' >
        <Button className={cn('flex flex-row h-[50px] gap-7 items-center w-full p-4 shadow-none  border-2 rounded-lg justify-start  hover:shadow-md hover:bg-secondry-1 hover:text-primary-1')}> 
       
          <Image
          src="/icons/booking.svg"
          alt="Booking"
          width={24}
          height={24}
         
          />
          <p className='text-[20px] font-light max-lg:hidden'>
           Dashboard
          </p>
        
        </Button>
        </Link>
    {sidebarLinks.map((link)=>{
      const isActive = pathname === link.route || pathname.includes(link.route)
      return( 
         <Link href={link.route}  className='flex flex-row gap-4 mt-4' key={link.name}>
        <Button  key={link.name
          
        } className={cn('flex flex-row h-[50px] gap-7 items-center w-full  shadow-none p-4 border-2 rounded-lg justify-start hover:shadow-md hover:bg-secondry-1 hover:text-primary-1' , {'bg-secondry-1 text-primary-1' : isActive})}>
       
          <Image
          src={link.img}
          alt={link.name}
          width={24}
          height={24}
          className={`${isActive ? 'brightness-200 invert' :'' }object-contain`} 
          />
          <p className='text-[20px] font-light max-lg:hidden'>
            {link.name}
          </p>
        
        </Button>
        </Link>
      )
    })}
    <div className='mt-72 mx-auto bottom-4 fixed'>

    </div>
  </div>
</section>
  )
}

export default Sidebar