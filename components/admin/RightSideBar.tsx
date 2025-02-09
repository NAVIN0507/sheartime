
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
<section className=' left-0 top-0  flex min-h-screen w-fit flex-col justify-between bg-secondry-7 text-black shadow-2xl p-6 pt-32 text-3xl max-sm:hidden lg:w-[350px] '>
<div className='-mt-20 flex flex-row gap-1'>
  <Button className='w-20 h-20 bg-fuchsia-400'>
    <h1 className='my-auto text-2xl text-white'>{getIntials(session.user?.name!)}</h1>
  </Button>
  <div className='flex flex-col gap-1 my-auto ml-4'>
     <p className='text-2xl text-white'>Welcome 👋</p>
    <p className='text-2xl text-white'>{session.user?.name}</p>
    
  </div>
</div>
  
  <div className='flex flex-1 flex-col gap-6 mx-auto fixed mt-[150px]'>


    {AdminSideBar.map((link)=>{
     
      return( 
         <Link href={link.route}  className='flex flex-row gap-4 mt-4 w-full' key={link.name}>
        <Button  key={link.name
          
        } className={cn('flex flex-row h-[60px] gap-7 items-center w-full text-white  shadow-none p-4 rounded-lg justify-start hover:shadow-md hover:bg-graphite-1 hover:text-primary-1' , {'bg-graphite-1 text-primary-1' :''})}>
       
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

  </div>
      <div className=' mx-auto bottom-0 fixed'>
      <ShopDetails id={session.user?.id || ''}/>
    </div>
</section>
  )
}

export default RightSideBar