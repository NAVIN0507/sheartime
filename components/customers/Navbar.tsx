import { Session } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { getIntials } from '@/lib/utils'
import { signOut } from '@/auth'
import { Button } from '../ui/button'
import { redirect } from 'next/navigation'

const Navbar = ({session}:{session:Session}) => {
    if(!session) return redirect("/sign-in")
  return (
    <header className='z-10 fixed w-full p-3 top-0 bg-primary-1 shadow-md '>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-col gap-1'>
        <Link href="/" className='flex flex-row gap-1'>
      
            <Image
            src="/icons/logo-white.svg"
            alt='logo'
            width={50}
    height={40}
    />
    <h1 className='font-bold mt-2 text-3xl ml-2 text-black'>SHEARTIME</h1>
        
        </Link>
        </div>
        <div className='flex flex-col items-end justify-end my-auto'>
        <ul className='flex flex-row items-center gap-8 mt-2'>
            
            <li>
            
                <Link href={`/my-profile/${session?.user?.id}`} className='flex flex-row gap-3 my-auto'>
                
                <Avatar className='my-auto'>
                    <AvatarFallback className='bg-gray-300'>{
                    //@ts-ignore
                    getIntials(session?.user?.name)
                    }</AvatarFallback>
                    
                </Avatar>
                 <div className='flex flex-col max-md:hidden'>
                <p className='font-light text-2xl text-dark-200'>{session?.user?.name}</p>
         
            </div>
                </Link>
            </li>
            <li className='mr-15'> 
            <form action={async()=>{
                "use server"
                await signOut();
            }}><Button className='bg-secondry-1 text-primary-1 shadow-none'>Logout</Button></form>
            </li>
        </ul>
        </div>
        </div>
    </header>
  )
}

export default Navbar