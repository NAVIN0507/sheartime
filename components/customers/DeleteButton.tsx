"use client"
import React from 'react'
import { Button } from '../ui/button'
import { deleteBookingById } from '@/lib/actions/user.action'
import { Check, Trash } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const DeleteButton = ({id}:{id:string}) => {
    const router = useRouter();
    const handleDelete = async(id:string)=>{
        const result = await deleteBookingById(id);
        if(result?.success){
            toast("Booking is canclled" ,{
            className:"bg-green-1 text-white border-none text-bold",
            duration: 5000,
            icon:<Check width={20} height={20} className='rounded-full object-fill'/>
        })
        router.refresh()
        }
    }
  return (
     <Button className=' mr-10 rounded-full shadow-none  text-red-500 text-3xl' onClick={()=>handleDelete(id)}><Trash width={40} height={40} size={100}/></Button>
  )
}

export default DeleteButton