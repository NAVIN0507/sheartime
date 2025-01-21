"use client";
import React from 'react'
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { Button } from './ui/button';
import Link from 'next/link';

import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from 'react-icons/fa'
import Image from 'next/image';
const links =[
    {href:'https://discord.com' , icon :<FaDiscord/>},
    {href:'https://twitter.com' , icon :<FaTwitter/>},
    {href:'https://github.com' , icon :<FaGithub/>},
    {href:'https://twitch.com' , icon :<FaTwitch/>}


]
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
const Hero = () => {
  return (
    <section className='flex flex-col mt-[150px] items-center' >

        {/* <BackgroundBeamsWithCollision> */}
      <div className='flex flex-row gap-5'>   
        <div className='flex flex-col gap-2 ml-3'>
            
        <HeroHighlight>
       
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.1,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-black dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto "
      >
        
        With <span className='text-secondry-1 underline'>sheartime</span>, you can change your life by reducing your time in waiting {""}
        <Highlight className="text-black dark:text-white">
          make at time , make your style
        </Highlight>
      </motion.h1>
      <div className='mt-10  ml-[25px] flex flex-col'>
        <Button className='bg-secondry-1 text-primary-1 w-[250px] h-[60px] text-1xl'>
            <Link href="/sign-in">Book Your First Slot</Link>
        </Button>
       

      </div>
    </HeroHighlight>
    </div>
    <div className='items-center justify-center text-center mt-6 hidden sm:block'>
            <Image
             src="/icons/logo-white.svg"
             alt='logo'
             width={500}
             height={500}
             className='rounded-full object-contain'
             />
             </div>
              <div className='flex flex-col gap-5 mt-[120px] mr-4'>
        {links.map((link)=>(
          <div key={link.href}>
            <Button className='rounded-full hover:bg-secondry-1 hover:text-primary-1 shadow-none'>{link.icon}</Button>
          </div>
))}
</div>
    </div> 
    {/* </BackgroundBeamsWithCollision> */}
    </section>
  )
}

export default Hero