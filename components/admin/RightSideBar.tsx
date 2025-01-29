import React from 'react'
import { Button } from '../ui/button'
import { CircleCheckBig, CircleDashed, CircleX, Star } from 'lucide-react'

const RightSideBar = () => {
  return (
   <section className='flex flex-row mr-11'>
    <div className='w-[500px] min-h-screen  flex flex-col gap-3 mr-5 mt-3 mb-10'>
       <div className='w-[550px] h-[500px] shadow-lg  bg-primary-1   rounded-xl mr-10'>
        <div className='flex flex-col gap-1 ml-10 mt-10'>
                  <span className="relative flex size-6"> 
         
         <span className="relative inline-flex size-6 rounded-full bg-blue-500"></span></span>
                <div className='w-[500px] h-[150px] shadow-xl mx-auto items-center text-center rounded-xl -mt-4'>
                    <div className='mt-5 '>
            <h1 className='capitalize text-3xl my-auto mx-auto'>Pending Bookings </h1>
            <h2><Button className='bg-blue-400 w-[100px] text-black mt-5 h-10 text-2xl shadow-none border-none'><CircleDashed className='animate-spin'/>5</Button></h2>
            </div>
            </div>
            <div className='flex flex-row gap-[60px] mx-auto mt-7'>
                 <span className="relative flex size-6"> 
    
         <span className="relative inline-flex size-6 rounded-full bg-green-500 -mt-2"></span></span>
                <div className='w-[220px] h-[200px] rounded-xl shadow-xl -ml-20'>
                    <div className='mt-7 ml-4'>
                    <h1 className='text-3xl'>Booked</h1>
                    <h2><Button className='bg-green-400 w-[100px] text-black mt-5 h-10 text-2xl shadow-none border-none'><CircleCheckBig />4</Button></h2>
                    </div>
                </div>
<span className="relative flex size-6">
    
         <span className="relative inline-flex size-6 rounded-full bg-red-500 -mt-2"></span></span>
                <div className='w-[220px] h-[200px] rounded-xl shadow-xl -ml-20'>
                    <div className='mt-7 ml-4'>
                    <h1 className='text-3xl'>Cancelled</h1>
                    <h2><Button className='bg-red-400 w-[100px] text-black mt-5 h-10 text-2xl shadow-none border-none'><CircleX />4</Button></h2>
                    </div>
                </div>
            </div>
            
        </div>
       </div>
       <div className='w-[550px] h-[500px] shadow-lg bg-primary-1 rounded-xl mb-10'>
        <div className='mt-5 ml-5' >
            <h1 className='text-3xl'>FeedBack and Reviews</h1>
            <div className='text-yellow-400 flex flex-row gap-1 mt-2'><Star /><Star /><Star /><Star /><Star /></div>
        </div>
       </div>
    </div>
   </section>
  )
}

export default RightSideBar