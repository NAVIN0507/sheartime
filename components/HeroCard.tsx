import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import Herocarousel from './Herocarousel'
import HeroCircle from './HeroCircle'

const HeroCard = () => {
  return (
  <section className='hero-card'>
    <div className='flex flex-col'>
    <h1 className='text-white '>Hi There 👋</h1>
    <h3 className=' mt-2 text-white'>Welcome to <span className='text-green-1 hover:text-secondry-4'>ShearTime</span> </h3>
    <p className='text-white text-4xl'>Get the Perfect Cut, Every Time <br />
    Book Your Appointment in Just a Few Clicks</p>
    <div>
        <Button  className='main-btn hover:bg-green-1' asChild>
            <Link href="/sign-in" className='main-btn flex flex-row gap-1'>
           <p className='text-[20px] t'> Create Your First Booking </p>
            <Image src="/icons/right-arrow.svg" alt='arrow' width={27}
            height={27}/>
            </Link>
        </Button>
    </div>
    </div>
    <div className='video-player mt-[-70px] bg-primary-2 max-lg:hidden '>
      
         <Herocarousel/>
         {/* <HeroCircle/> */}
    </div>
  </section>
  )
}

export default HeroCard