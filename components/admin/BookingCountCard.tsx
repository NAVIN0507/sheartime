"use client"
import React, { ReactNode } from 'react'
import {motion} from "framer-motion";
interface Props{
    type:string;
    typeName:string;
    count:number;
    icon:ReactNode;
    className:string;
}
const BookingCountCard = ({type , typeName , count , icon , className}:Props) => {
  return (
    <motion.div 
    initial={{opacity:0 , x:20}}
    transition={{duration:1.0}}
    whileInView={{opacity:1 , x:0}}
    viewport={{once:true}}
    >
    <div className='mr-5'>
        <div className={`w-28 h-14  rounded-xl  flex gap-10 items-center  ${className ? className :'bg-primary-1'}`}>
            <h1 className='flex gap-2 mx-auto'>{icon} {count}</h1>
          
        </div>
    </div>
    </motion.div>
  )
}

export default BookingCountCard