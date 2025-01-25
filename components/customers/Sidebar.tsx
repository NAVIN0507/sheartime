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
<section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-primary-1 shadow-lg p-6 pt-24 text-black max-sm:hidden lg:w-[284px] '>
  <div className='flex flex-1 flex-col gap-6'>
    {sidebarLinks.map((link)=>{
      const isActive = pathname === link.route
      return(
        <Button  key={link.name} className={cn('flex flex-row h-[50px] gap-7 items-center p-4 rounded-lg justify-start shadow-none hover:shadow-md' , {'bg-secondry-1 text-primary-1' : isActive})}>
        <Link href={link.route}  className='flex flex-row gap-4'>
          <Image
          src={link.img}
          alt={link.name}
          width={24}
          height={24}
          className={`${isActive ? 'brightness-200 invert' :'' }object-contain`} 
          />
          <p className='text-base font-light max-lg:hidden'>
            {link.name}
          </p>
        </Link>
        </Button>
      )
    })}
    <div className='mt-72 mx-auto bottom-4 fixed'>
<div className='flex flex-row gap-2 w-[270px] h-[60px] border-2 rounded-full items-start  justify-start  -ml-4 cursor-pointer   hover:shadow-md'>
  <div className='mt-2 flex flex-row gap-4 text-lg ml-2'>
  <Avatar>
    
    <AvatarFallback className='bg-amber-100 w-12 h-12 items-center justify-center'>
      <h1 className='text-center mt-1'>{getIntials(session?.user?.name || 'IN')}</h1></AvatarFallback>
  </Avatar>
   <div className='flex flex-col max-md:hidden'>
                <p className='font-semibold text-dark-200'>{session?.user?.name}</p>
                <p className='text-xs text-light-500'>{session?.user?.email}</p>
            </div>
</div>
</div>
    </div>
  </div>
</section>
  )
}

export default Sidebar