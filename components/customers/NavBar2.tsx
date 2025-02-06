"use client"
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
const NavBar2 = () => {
      const pathname = usePathname();
  return (
<section className='mt-20'>
    <div className='w-[970px] h-[80px]  mx-auto items-center justify-between border-b-2 border-secondry-1'>
        <div className='mx-auto'>
        <ul className='flex flex-row mx-auto'>
            {sidebarLinks.map((link)=>{
                  const isActive = pathname === link.route || pathname.includes(link.route)
                return( <Link href={link.route}  className='flex flex-row gap-4 mt-4 mx-auto' key={link.name}>
        <Button  key={link.name
          
        } className={cn('flex flex-row h-[50px] gap-7 items-center w-full  shadow-none p-4  rounded-full justify-start  hover:underline ' , {'bg-secondry-1 text-primary-1' : isActive})}>
       
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
        </Link>)
            })}
        </ul>
        </div>
    </div>
</section>
  )
}

export default NavBar2