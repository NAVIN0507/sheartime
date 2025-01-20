import React from 'react'

const GuideSection = () => {
  return (
   <section className='flex flex-col flex-wrap gap-2 items-center mt-[70px] w-full'>
    <h1 className='text-center text-5xl font-extrabold'>Features</h1>
    <div className='flex flex-row gap-10 mt-20'>
        <div className='w-[350px] h-[300px] shadow-2xl items-center'>
            <div className='w-[100px] h-[100px] rounded-full bg-secondry-1 mt-[-50px] ml-10'></div>
        </div>
        <div className='w-[350px] h-[300px] shadow-2xl'>
            <div className='w-[100px] h-[100px] rounded-full bg-pink-400 mt-[-50px] ml-10'></div>
        </div>
        
         <div className='w-[350px] h-[300px] shadow-2xl'>
            <div className='w-[100px] h-[100px] rounded-full bg-green-1 mt-[-50px] ml-10'></div>
        </div>
        <div className='w-[350px] h-[300px] shadow-2xl'>
            <div className='w-[100px] h-[100px] rounded-full bg-red-400 mt-[-50px] ml-10'></div>
        </div>
    </div>
   </section>
  )
}

export default GuideSection