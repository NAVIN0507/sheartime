import { developers } from '@/constants'
import { GithubIcon, LinkedinIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Testimonial = () => {
  return (
 <div className=' ml-[170px] mt-10 grid grid-cols-4 gap-2 mb-20'>
    <div className='w-[1200px] h-[220px] bg-primary-2 rounded-2xl'>
        <div className='flex flex-row gap-10 ml-[350px]'>
            <ul className='text-white tex-2xl'>
                {developers.map((dev)=>(
                   <div className='flex flex-col mt-3 ml-10'  key={dev.name}>
                    <Link href="/" className='flex flex-row gap-4'>
                    <Image
                    src={dev.image}
                    alt=''
                    width={40}
                    height={40}
                    className='rounded-full object-fill'
                    />
                    <li className='text-2xl'>
                        {dev.name}
                    </li>
                   
                    </Link>
                   </div>
                ))}
            </ul>
             <ul className='text-white tex-2xl'>
                <div className='flex flex-col mt-3 ml-10 text-2xl flex-wrap gap-4'>
                <li>navinofficial2005@gmail.com</li>
                <li>8248690516</li>
                <div className='flex flex-row gap-4'>
                    <GithubIcon className='rounded-full' width={20} height={20}/>
                <li>GitHub</li>
                </div>
                 <div className='flex flex-row gap-4'>
                    <LinkedinIcon className='rounded-full' width={20} height={20}/>
                <li>Linkid In</li>
                </div>
                </div>
            </ul>
        </div>
    </div>
    
 </div>
  )
}

export default Testimonial