import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { getIntials } from '@/lib/utils'
import { Session } from 'next-auth'
import { LogOut } from 'lucide-react'
import { signOut } from '@/auth'

const NavBar = ({session}:{session:Session}) => {
  return (
   <header className='fixed rounded-md flex flex-col gap-1 w-full bg-primary-1 shadow-xl h-28'>
    <nav className='flex flex-row gap-2 items-center my-auto'>
        <Link href="/" className='flex flex-row gap-2'>
        <Image
        src="/icons/logo-white.svg"
        alt='logo'
        width={150}
        height={150}
        />
        <h1 className='my-auto text-5xl'>ShearTime</h1>
        </Link>
        <div className=' hidden sm:ml-[1400px] sm:block sm:my-auto'>
            <ul className='flex flex-row gap-2'>
           
                  <div className='flex flex-row gap-2 w-[370px] h-[60px] rounded-full items-start  justify-start  -ml-4 cursor-pointer'>
  <div className='flex flex-row gap-4 text-lg ml-2'>
          <span className="relative flex size-5"> 
         <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-1 opacity-75 -mt-2"></span>  
         <span className="relative inline-flex size-5 rounded-full bg-green-1 -mt-2"></span></span>
 <Button className='w-[60px] h-[60px] bg-cyan-400 -ml-7'>
 <h1 className='text-3xl'> {getIntials(session.user?.name || '')} </h1>
 </Button>
   <div className='flex flex-col max-md:hidden'>
                <p className='font-light text-2xl text-dark-200'>{session?.user?.name}</p>
                <p className='text-1xl text-light-500'>{session?.user?.email}</p>
            </div>
</div>
</div>
 <li className='my-auto'> 
            <form action={async()=>{
                "use server"
                await signOut();
            }}><Button className='bg-secondry-1 text-primary-1 shadow-none h-14 text-1xl'><LogOut />Logout</Button></form>
            </li>
            </ul>
        </div>
    </nav>
   </header>
  )
}

export default NavBar