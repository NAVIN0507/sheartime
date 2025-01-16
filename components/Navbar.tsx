import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <nav className='main-navbar'>
   <div className='flex flex-row gap-[850px]'>
    <Link href="/" className='flex flex-row gap-1'>
    <Image
    src="/icons/logo-main.svg"
    alt='logo'
    width={50}
    height={40}
    />
    <h1 className='text-white font-bold mt-2 text-3xl ml-4 '>ShearTime</h1>
    </Link>
    <div className='mt-2'>
        <ul className='flex flex-row text-white gap-[50px]  mt-2 text-[23px]'> 
         <a href="/">   <li className='hover:text-secondry-2 cursor-pointer hover:underline'>Home</li></a>
          <a href="#guide"> <li className='hover:text-secondry-2 cursor-pointer hover:underline'>About</li></a> 
          <a href="#contact">  <li className='hover:text-secondry-2 cursor-pointer hover:underline'>Contact</li></a>
           <a href="/sign-in"> <li className='hover:text-secondry-2 cursor-pointer hover:underline'>SignIn</li></a>
          <a href="/sign-up">  <li className='hover:text-secondry-2 cursor-pointer hover:underline'>SignUp</li> </a>
        </ul>
    </div>
   </div>
   </nav>
  )
}

export default Navbar