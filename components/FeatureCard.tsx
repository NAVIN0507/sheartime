import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'

interface Props{
    title:string;
    description:string;
    className?:string;
    icon:React.ReactNode
}
const FeatureCard = ({title , description  , className , icon}:Props) => {
  return (
    <div className='w-[350px] h-[300px] bg-primary-5 rounded-xl items-center shadow-xl hover:shadow-2xl'>
      
        <div className={cn(' flex  text-2xl w-[100px] h-[100px]  mt-[-50px] ml-10 items-center text-center'  , className)}>
          
         <div className='m-auto text-5xl'>{icon}</div> 
         
        </div>
         <div className='flex flex-col gap-2  ml-7  mt-10 mr-2'>
            <h1 className='text-2xl'>{title}</h1>
            <p>{description}</p>
          </div>
    </div>
  )
}

export default FeatureCard