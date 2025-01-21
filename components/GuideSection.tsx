import React from 'react'
import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from 'react-icons/fa'

import FeatureCard from './FeatureCard'
export const FeatureItems=[
    {
        title:"Create Account",
        description:"Create your account in sheartime",
        className:"bg-pink-400",
        icon:<FaDiscord className='h-[30px] w-[30px] text-white'/>
    },
       {
        title:"Create Accoun",
        description:"Create your account in sheartime",
        className:"bg-teal-400",
        icon:<FaDiscord className='h-[30px] w-[30px] text-white'/>
    },
       {
        title:"Create Accou",
        description:"Create your account in sheartime",
        className:"bg-pink-400",
        icon:<FaDiscord className='h-[30px] w-[30px] text-white'/>
    },
       {
        title:"Create Acco",
        description:"Create your account in sheartime",
        className:"bg-pink-400",
        icon:<FaDiscord className='h-[30px] w-[30px] text-white'/>
    }
]
const GuideSection = () => {
  return (
   <section className='flex flex-col flex-wrap gap-2 items-center mt-[70px] w-full'>
    <h1 className='text-center text-5xl font-extrabold max-sm:text-start'>Features</h1>
    <div className='flex flex-col gap-2 items-start'>
    <div className='grid grid-cols-1 sm:grid-cols-4  gap-10 mt-[100px]'>
        {FeatureItems.map((itme)=>{
            console.log(itme.className)
            return(
                <FeatureCard key={itme.title} className={itme.className} title={itme.title} description={itme.description} icon={itme.icon}/>
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