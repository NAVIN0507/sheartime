import { developers } from '@/constants'
import { GithubIcon, LinkedinIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from 'react-icons/fa'
const links =[
    
    {href:'https://twitter.com' , icon :<FaTwitter/>},
    {href:'https://github.com' , icon :<FaGithub/>},
    {href:'https://twitch.com' , icon :<FaTwitch/>}


]
interface Props {
    name:string;
    role:string;
    image:string;
}
const Testimonial = ({name , role , image}:Props) => {
  return (
 <div className='w-[300px] h-[200px]  items-center text-center justify-center cursor-pointer delay-500 ease-in-out bg-primary-2 rounded-md '>
    <div className='flex flex-col items-center'>
        <div>
            <Image src={image} alt={name} width={80} height={80} className='rounded-full object-fill mt-2' />
            <p className='text-[20px] text-white mt-3'>{name}</p>
            <div className='flex flex-row gap-5 mt-3'>
            {links.map((link)=>(
    <a key={link.href} href={link.href} target='_blank' rel='noopener noreferrer' className='text-white transition-colors duration-500 ease-in-out hover:text-green-1'>
        {link.icon}
    </a>
))}
</div>
      
        </div>
    </div>
 </div>
  )
}

export default Testimonial