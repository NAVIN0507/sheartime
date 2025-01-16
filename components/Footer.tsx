import React from 'react'
import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from 'react-icons/fa'
const links =[
    {href:'https://discord.com' , icon :<FaDiscord/>},
    {href:'https://twitter.com' , icon :<FaTwitter/>},
    {href:'https://github.com' , icon :<FaGithub/>},
    {href:'https://twitch.com' , icon :<FaTwitch/>}


]
const Footer = () => {
  return (
    <footer className='bg-primary-4 text-white  w-full h-[50px] max-lg:w-[500px] max-lg:h-[110px] max-lg:mt-[60px]'>
         <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row mt-5'>
            <p className='text-center text-sm md:text-left hover:text-secondry-1'>
                 &copy; Nova 2025. All rights reserved
            </p>
            <div className='flex justify-center gap-4 md:justify-start'>
{links.map((link)=>(
    <a key={link.href} href={link.href} target='_blank' rel='noopener noreferrer' className='text-white transition-colors duration-500 ease-in-out hover:text-secondry-1'>
        {link.icon}
    </a>
))}
            </div>
             <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline hover:text-secondry-1 md:text-right"
        >
          Privacy Policy
        </a>
        </div>
    </footer>
  )
}

export default Footer