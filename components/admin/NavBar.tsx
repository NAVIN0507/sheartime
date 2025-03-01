import Image from 'next/image'

import React from 'react'
import { Button } from '../ui/button'
import { getIntials } from '@/lib/utils'
import { Session } from 'next-auth'

import { redirect } from 'next/navigation'
import { Bell, Search } from 'lucide-react'
import { Input } from '../ui/input'

const NavBar = ({session}:{session:Session}) => {
    if(!session) return redirect("/sign-in")
  return (
<header className='w-full top-3 mt-4 h-[110px] ml-[340px] bg-primary-1 rounded-2xl mr-4'>
<nav className='my-auto mt-8 ml-10 justify-between flex flex-row'>
    <div className='flex flex-row gap-5 my-auto'>
        <Button className= 'text-2xl my-auto w-[50px] h-[50px] rounded-full bg-secondry-1'><Search
        color='#fff'
        /></Button> 
        <Input className='w-[400px] h-[50px] border-none shadow-none' placeholder='Type Here to Search'/>
    </div>
<div className='flex flex-row gap-8 w-[200px] mt-1'> 
    <div className='ml-2 flex flex-row'>
<div className='w-[50px] h-[50px]  rounded-full text-center'>
     <Bell size={35} className='my-auto mx-auto mt-1'/>
</div>
<div className='w-[50px] h-[50px] bg-secondry-1 ml-5 -mt-1 rounded-full text-center'>
     <h1 className='text-1xl mt-3 my-auto mx-auto text-center text-white'>{getIntials(session.user?.name!)}</h1>
</div>
</div>
</div>
</nav>
</header>
  )
}

export default NavBar