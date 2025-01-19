import { NavItems } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BreathingText from './fancy/breathing-text'
import Typewriter from './fancy/typewriter'
import { Button } from './ui/button'

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
          className="text-black text-2xl mt-5 font-bold"
          waitTime={3500}
          deleteSpeed={40}
          cursorChar={""}
        />
    </Link>
    <div className='flex flex-row items-end text-end mr-7 hidden sm:block'>
        <ul className='flex flex-row gap-5  text-[20px]'>
            {NavItems.map((itme)=>(
                <Button className='border-none bg-none text-[17px] cursor-pointer rounded-lg shadow-none  hover:bg-secondry-1 hover:text-primary-1 hover:-translate-y-2 duration-500 ease-in-out' asChild key={itme.name}>
                <li className='hover:bg-secondry-1 hover:text-primary-1'><Link href={itme.route}>{itme.name}</Link></li>
                </Button>
            ))}
        </ul>
    </div>
</div>
   </nav>
  )
}

export default Navbar