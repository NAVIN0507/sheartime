import { Session } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = ({session}:{session:Session}) => {
  return (
    <header className='top-0 flex justify-between gap-5 '>
        <Link href="/" className='flex flex-row gap-1'>
      
            <Image
            src="/icons/logo-main.svg"
            alt='logo'
            width={50}
    height={40}
    />
    <h1 className='font-bold mt-2 text-3xl ml-2 text-green-1'>ShearTime</h1>
        
        </Link>
        <ul className='flex flex-row items-center gap-8'>
            <li></li>
        </ul>
    </header>
  )
}

export default Navbar