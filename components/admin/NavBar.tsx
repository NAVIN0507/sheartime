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
    <div className='flex flex-row gap-1 my-auto  '>
        {/* <div className='w-[80px] h-[80px] border-2  rounded-xl shadow-lg my-auto ml-4'>
            <h1 className='text-2xl text-center items-center mt-5'>{getIntials(session.user?.name || '')}</h1>
        </div> */}
        <h1 className='text-3xl ml-5 text-white'>Welcome {session.user?.name}</h1>
        <div className='right-4 fixed -mt-6 my-auto'>
            
              <div className=' flex flex-row gap-4 text-lg ml-2'>
            
               <div className='flex flex-col max-md:hidden mt-2'>
                            <p className='font-light text-2xl text-primary-1 text-end'>{session?.user?.name}</p>
                            <p className='text-1xl text-primary-1'>{session?.user?.email}</p>
                        </div>
                         <Button className='w-[80px] h-[80px] bg-violet-400'>
             <h1 className='text-3xl'> {getIntials(session.user?.name || '')} </h1>
             </Button>
            </div>
            </div>
        </div>
    
   </header>
  )
}

export default NavBar