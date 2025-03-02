"use client"
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
const NavBar2 = () => {
      const pathname = usePathname();
  return (
<section className='mt-20'>
    <div className='w-[120px] h-full left-0 fixed   mx-auto items-center justify-between shadow-2xl text-black border-secondry-1'>
        <div className='mx-auto my-auto items-center justify-center mt-[50px]'>
        <ul className='flex flex-col gap-1 mx-auto'>
            {sidebarLinks.map((link)=>{
                  const isActive = pathname === link.route || pathname.includes(link.route)
                return( <Link href={link.route}  className='flex flex-col gap-10 mt-4 mx-auto' key={link.name}>
        <Button  key={link.name
          
        } className={cn('flex flex-col h-[60px] w-[60px]  gap-10 items-center   shadow-none p-4  rounded-full justify-start  hover:underline  ' , `${pathname===link.route ? 'border-2 border-gray-600' :''}`)}>
       <TooltipProvider>
  <Tooltip>
    <TooltipTrigger> <Image
          src={link.img}
          alt={link.name}
          width={34}
          height={34}
          className={`${isActive ? 'brightness-200 invert' :'' }object-contain  `} 
          />
        </TooltipTrigger>
    <TooltipContent className='bg-secondry-1 text-primary-1 p-3'>
      <p>{link.name}</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
         
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