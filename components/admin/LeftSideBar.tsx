import { AdminSideBar } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const LeftSideBar = () => {
  return (
    <section className='min-h-screen w-[320px] bg-primary-1 top-0 fixed'>
        <div className='flex flex-col'>
            <Link href={"/"} className='flex flex-row gap-2 mt-5 border-b-2'>
            <Image
            src="/icons/logo-white.svg"
            alt='logo'
            width={120}
            height={150}
            />
            <h1 className='my-auto text-3xl'>SHAERTIME</h1>
            </Link>
            <div className='my-auto mt-32'>
            <div className='flex flex-col gap-10'>
                {AdminSideBar.map((link)=>{
                    
                    return(
                        <Link href={link.route} key={link.route}>
                        <div className='flex flex-row gap-2 w-[300px] mx-auto h-[50px] ' >
                            <div className='my-auto ml-5 flex flex-row gap-3'>
                          <Image
                            src={link.img}
                            alt={link.name}
                            width={25}
                            height={25}
                            />
                            <h3 className='text-[20px] font-light'>{link.name}</h3>
                            </div>
                           
                        </div>
                        </Link>
                    )
                })}
            </div>
            </div>
        </div>
    </section>
  )
}

export default LeftSideBar