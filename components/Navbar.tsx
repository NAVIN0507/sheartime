import { NavItems } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BreathingText from './fancy/breathing-text'
import Typewriter from './fancy/typewriter'

const Navbar = () => {
  return (
   <nav className='w-full p-3 text-center items-center top-0 bg-primary-1'>
<div className='relative flex h-16 items-center justify-between'>
    
    <Link href="/" className='flex flex-row gap-3 text-center'>
    <Image
    src="/icons/logo-white.svg"
    alt='logo'
    width={100}
    height={100}

    />
  <Typewriter
          text={[
           "SHEARTIME",
           
          ]}
          speed={70}
          className="text-black text-2xl mt-5"
          waitTime={3500}
          deleteSpeed={40}
          cursorChar={""}
        />
    </Link>
    <div className='flex flex-row items-end text-end mr-7'>
        <ul className='flex flex-row gap-10 text-[20px]'>
            {NavItems.map((itme)=>(
                <li key={itme.name}><Link href={itme.route} className='hover:text-secondry-1 hover:underline'>{itme.name}</Link></li>
            ))}
        </ul>
    </div>
</div>
   </nav>
  )
}

export default Navbar