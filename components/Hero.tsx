"use client";
import React from 'react'
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { Button } from './ui/button';
import Link from 'next/link';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from 'react-icons/fa'
const links =[
    {href:'https://discord.com' , icon :<FaDiscord/>},
    {href:'https://twitter.com' , icon :<FaTwitter/>},
    {href:'https://github.com' , icon :<FaGithub/>},
    {href:'https://twitch.com' , icon :<FaTwitch/>}


]
const Hero = () => {
  return (
    <section className='flex flex-col text-center items-center justify-center mt-0'>
        <BackgroundBeamsWithCollision>
        <div className='flex flex-col gap-2'>
             
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
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-black dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        With <span className='text-secondry-1'>sheartime</span>, you can change your life by reducing your time in waiting {""}
        <Highlight className="text-black dark:text-white">
          make at time , make your style
        </Highlight>
      </motion.h1>
      <div className='mt-10 items-center justify-center flex flex-col'>
        <Button className='bg-secondry-1 text-primary-1 w-[200px] h-[40px] text-1xl'>
            <Link href="/sign-in">Book Your First Slot</Link>
        </Button>
        <div className='flex flex-row gap-3 mt-6'>
        {links.map((link)=>(
            <div key={link.href}>
             <a  href={link.href} target='_blank' rel='noopener noreferrer' className='text-black text-1xl transition-colors duration-500 ease-in-out hover:text-secondry-1'>
        {link.icon}
    </a>
    </div>
))}
</div>

      </div>
    </HeroHighlight>
    </div>
    </BackgroundBeamsWithCollision>
    </section>
  )
}

export default Hero