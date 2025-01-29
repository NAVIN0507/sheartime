"use client"
import React from 'react'
import { Button } from '../ui/button'
import { db } from '@/database/drizzle';
import { shops } from '@/database/schema';
import { eq } from 'drizzle-orm';

const Openaing = ({type , id} :{type:'CLOSE' | 'OPEN' ; id:string}) => {
    const  handleOpenings = async(id:string)=>{
        const  open = await db.update(shops).set({opened:true}).where(eq(shops.adminId , id))
    }
    const  handleClosing = async(id:string)=>{
        const  open = await db.update(shops).set({opened:false}).where(eq(shops.adminId , id))
    }
  return (
    <div>
        {type === 'CLOSE' ? (
            <Button className='bg-red-400 text-white w-full mx-auto h-[60px] text-[20px] mr-2' onClick={()=>handleClosing(id)}>Close Bookings</Button>
        ) :(
             <Button className='bg-green-400 text-white w-full mx-auto h-[60px] text-[20px] mr-2' onClick={()=>handleOpenings(id)}>Open Bookings</Button>
        )}
    </div>
  )
}

export default Openaing