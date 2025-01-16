"use client"
import React, { useRef } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import Herocarousel from './Herocarousel'
import TextCursorProximity from './fancy/text-cursor-proximity'
import Typewriter from './fancy/typewriter'


const HeroCard = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  return (
  <section className='hero-card'>
    <div className='flex flex-col' >

    <h1 className='text-white '>Hi There 👋</h1>
     <div className="flex flex-row justify-center uppercase leading-none pt-4 pl-6" ref={containerRef} >
      <TextCursorProximity
      label='Welcome to ' 

      className="leading-none text-1xl will-change-transform sm:text-6xl md:text-6xl lg:text-7xl font-overusedGrotesk"
       styles={{
              transform: {
                from: "scale(1)",
                to: "scale(1.4)",
              },
              color: { from: "#ffffff", to: "#50C878" },
            }}
            falloff="gaussian"
            radius={100}
            containerRef={containerRef}   
      />
      <Typewriter
          text={[
            "ShearTime",
            "ShearTime",
            "ShearTime",
            
          ]}
          speed={70}
          className="text-[70px] text-green-1"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={""}
        />
     </div>
  
    <p className='text-white text-4xl mt-4'>Get the Perfect Cut, Every Time <br />
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