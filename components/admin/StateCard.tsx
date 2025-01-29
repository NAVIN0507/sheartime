import React, { ReactNode } from 'react'
interface Props{
    title:string;
    num:number;
    icon:ReactNode
}
const StateCard = ({title , num , icon}:Props) => {
  return (
    <div className='w-[450px] h-[200px] bg-secondry-7 rounded-2xl shadow-lg'>
        <div className='flex flex-row gap-4 ml-10 mt-10'>
            <h1 className='text-primary-1 text-xl'>{icon}</h1>
            <h1 className='text-primary-1 text-5xl ml-1 my-auto'>{num}</h1>
        </div>
        <div>
            <h1 className='ml-10 mt-8 text-primary-1 text-3xl'>{title}</h1>
        </div>
    </div>
  )
}

export default StateCard