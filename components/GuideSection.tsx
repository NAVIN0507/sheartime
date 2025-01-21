import React from 'react'
import FeatureCard from './FeatureCard'
import { FeatureItems } from '@/constants'

const GuideSection = () => {
  return (
   <section className='flex flex-col flex-wrap gap-2 items-center mt-[70px] w-full'>
    <h1 className='text-center text-5xl font-extrabold'>Features</h1>
    <div className='flex flex-col gap-2'>
    <div className='flex flex-row gap-10 mt-[100px]'>
        {FeatureItems.map((itme)=>{
            return(
                <FeatureCard className={itme.className} title={itme.title} description={itme.description}/>
            )
        })}
    </div>
     <div className='flex flex-row gap-10 mt-[100px]'>
        <div className='w-[350px] h-[300px] bg-primary-5 rounded-xl items-center shadow-lg'>
            <div className='w-[100px] h-[100px] rounded-full bg-purple-400 mt-[-50px] ml-10'></div>
        </div>
        <div className='w-[350px] h-[300px] bg-primary-5 rounded-xl shadow-lg'>
            <div className='w-[100px] h-[100px] rounded-full bg-teal-400 mt-[-50px] ml-10'></div>
        </div>
        
         <div className='w-[350px] h-[300px] bg-primary-5 rounded-xl shadow-lg'>
            <div className='w-[100px] h-[100px] rounded-full bg-cyan-400 mt-[-50px] ml-10'></div>
        </div>
        <div className='w-[350px] h-[300px] bg-primary-5 rounded-xl shadow-lg'>
            <div className='w-[100px] h-[100px] rounded-full bg-zinc-400 mt-[-50px] ml-10'></div>
        </div>
    </div>
    </div>
   </section>
  )
}

export default GuideSection