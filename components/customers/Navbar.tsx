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
    <header className='top-0 flex justify-between gap-5 '>
        <Link href="/" className='flex flex-row gap-1'>
      
            <Image
            src="/icons/logo-main.svg"
            alt='logo'
            width={50}
    height={40}
    />
    <h1 className='font-bold mt-2 text-3xl ml-2 text-green-1'>SHEARTIME</h1>
        
        </Link>
        <ul className='flex flex-row items-center gap-8'>
            <li>
                <Link href={`/my-profile/${session?.user?.id}`}>
                <Avatar>
                    <AvatarFallback className='bg-amber-50'>{getIntials(session?.user?.name)}</AvatarFallback>
                </Avatar>
                </Link>
            </li>
            <li>
            <form action={async()=>{
                "use server"
                await signOut();
            }}><Button>Logout</Button></form>
            </li>
        </ul>
    </header>
  )
}

export default Navbar