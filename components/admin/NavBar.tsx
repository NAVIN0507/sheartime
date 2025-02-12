import Image from 'next/image'

import React from 'react'
import { Button } from '../ui/button'
import { getIntials } from '@/lib/utils'
import { Session } from 'next-auth'

import { redirect } from 'next/navigation'

const NavBar = ({session}:{session:Session}) => {
    if(!session) return redirect("/sign-in")
  return (
<header className='w-[1500px] top-3 fixed h-[110px] ml-[350px] bg-primary-1 rounded-2xl'>
    
</header>
  )
}

export default NavBar