"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { db } from '@/database/drizzle';
import { shops } from '@/database/schema';
import { eq } from 'drizzle-orm';
import { Loader2Icon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Openaing = ({type , id} :{type:'CLOSE' | 'OPEN' ; id:string}) => {
    const [isLoading, setisLoading] = useState(false);
    const route = useRouter();
    const  handleOpenings = async(id:string)=>{
        setisLoading(true)
        const  open = await db.update(shops).set({opened:true}).where(eq(shops.adminId , id));
        route.refresh();
        setisLoading(false)
    }
    const  handleClosing = async(id:string)=>{
        setisLoading(true)
        const  open = await db.update(shops).set({opened:false}).where(eq(shops.adminId , id));
        route.refresh();
        setisLoading(false)
    }
  return (
    <div>
        {type === 'CLOSE' ? (
            <Button className='bg-red-400 text-white w-[300px] mx-auto h-[60px] text-[20px] mr-2' onClick={()=>handleClosing(id)}>{isLoading ? (<>Closing <Loader2Icon className='animate-spin'/></>) : 'Close Bookings'}</Button>
        ) :(
             <Button className='bg-green-400 text-white w-[300px] mx-auto h-[60px] text-[20px] mr-2' onClick={()=>handleOpenings(id)}>{isLoading ? (<>Opening <Loader2Icon className='animate-spin'/></>) : 'Open Bookings'}</Button>
        )}
    </div>
  )
}

export default Openaing