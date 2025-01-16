import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'
interface Props{
    title:string;
    imageUrl:string;
    des:string;
    className?:string;
}
const Guidecard = ({title , imageUrl , des , className}:Props) => {
  return (
    <div className={cn(  className ? className :'guide-info'  ) }>
    <div className='flex flex-col guide-card'>
        <div className='flex flex-row gap-2'>
        <Image
        src={imageUrl}
        alt=''
        width={37}
        height={37}
        className='absolute'
        />
        <h2 className='text-white text-4xl ml-[50px]'>{title}</h2>
        
        </div>
        <p className={cn( 'guide-des' , className ? className : 'guide-des') }>{des}</p>
    </div>
    </div>
  )
}

export default Guidecard