
import { AdminSideBar, sidebarLinks } from '@/constants'
import { cn, getIntials } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { Button } from '../ui/button'
import { Avatar } from '../ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { Session } from 'next-auth'
import ShopDetails from './ShopDetails'

const RightSideBar = ({session}:{session : Session}) => {
  if(!session) return null;

  
  return (
<section className=' left-0 top-0  flex min-h-screen w-fit flex-col justify-between bg-secondry-7 text-white shadow-lg p-6 pt-32 text-3xl max-sm:hidden lg:w-[420px] '>
  <div className='-mt-28'>
    <Link href="/" className='flex flex-col'>
    <Image
    src="/icons/logo-admin1.svg"
    alt='logo'
    width={250}
    height={250}
    className='mx-auto'
    />
    </Link>
  </div>
  
  <div className='flex flex-1 flex-col gap-6 mx-auto mt-10'>


    {AdminSideBar.map((link)=>{
     
      return( 
         <Link href={link.route}  className='flex flex-row gap-4 mt-4 w-full' key={link.name}>
        <Button  key={link.name
          
        } className={cn('flex flex-row h-[60px] gap-7 items-center w-full text-primary-8  shadow-none p-4 rounded-lg justify-start hover:shadow-md hover:bg-graphite-1 hover:text-primary-1' , {'bg-graphite-1 text-primary-1' :''})}>
       
          <Image
          src={link.icon}
          alt={link.name}
          width={24}
          height={24}
          
          />
          <p className='text-[20px] font-light max-lg:hidden'>
            {link.name}
          </p>
        
        </Button>
        </Link>
      )
    })}
    <div className=' mx-auto  mt-44'>
      <ShopDetails id={session.user?.id || ''}/>
    </div>
  </div>
  
</section>
  )
}

export default RightSideBar