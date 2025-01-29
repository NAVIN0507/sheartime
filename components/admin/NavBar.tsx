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
   </header>
  )
}

export default NavBar