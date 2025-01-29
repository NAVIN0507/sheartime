import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { getIntials } from '@/lib/utils'
import { Session } from 'next-auth'
import { LogOut } from 'lucide-react'
import { signOut } from '@/auth'
import { redirect } from 'next/navigation'

const NavBar = ({session}:{session:Session}) => {
    if(!session) return redirect("/sign-in")
  return (
   <header className='top-0 fixed rounded-md flex flex-col gap-1 min-w-full   shadow-xl h-28'>
    <div className='flex flex-row gap-1 my-auto '>
        {/* <div className='w-[80px] h-[80px] border-2  rounded-xl shadow-lg my-auto ml-4'>
            <h1 className='text-2xl text-center items-center mt-5'>{getIntials(session.user?.name || '')}</h1>
        </div> */}
        <h1 className='text-3xl ml-5'>Welcome {session.user?.name}</h1>

    </div>
   </header>
  )
}

export default NavBar