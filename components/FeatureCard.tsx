import { cn } from '@/lib/utils';
import React from 'react'

interface Props{
    title:string;
    description:string;
    className?:string;
}
const FeatureCard = ({title , description  , className}:Props) => {
  return (
    <div className='w-[350px] h-[300px] bg-primary-5 rounded-xl items-center shadow-lg'>
        <div className={cn('w-[100px] h-[100px] rounded-full mt-[-50px] ml-10' , className)}>
            
        </div>
    </div>
  )
}

export default FeatureCard