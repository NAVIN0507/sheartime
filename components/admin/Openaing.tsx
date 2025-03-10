"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { db } from '@/database/drizzle';
import { shops } from '@/database/schema';
import { eq } from 'drizzle-orm';
import { Loader2Icon, LockKeyhole, LockKeyholeOpen } from 'lucide-react';
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
            <Button className='bg-red-400 text-white w-full mx-auto h-[60px] mt-5 mb-5 text-[20px] mr-2' onClick={()=>handleClosing(id)}>{isLoading ? (<>Closing <Loader2Icon className='animate-spin'/></>):(<>
            <LockKeyhole color="#ffffff" />
            Close Bookings
            </>)}</Button>
        ) :(
             <Button className='bg-green-400 text-white w-full mx-auto h-[60px] text-[20px] mt-5 mb-5  mr-2' onClick={()=>handleOpenings(id)}>{isLoading ? (<>Opening <Loader2Icon className='animate-spin'/></>) : (<><LockKeyholeOpen color="#ffffff" /> Open Bookings</>)}</Button>
        )}
    </div>
  )
}

export default Openaing