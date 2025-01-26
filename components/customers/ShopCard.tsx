"use client"
import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import { getShopById } from '@/lib/actions/admin.action';
import { CircleArrowOutUpRight, Mail, Phone } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from 'sonner';
interface Props{
    shopId: string
    shopName:string;
    shopImage:string;
    shopPhone:string;
    shopAdress:string;
    adminId:string;
    shopDescription:string;
    shopEmail:string;
    isOpened:boolean;
}
const ShopCard = ({
    shopId,
    shopName,
shopImage,
shopPhone,
shopAdress,
adminId,
shopDescription,
shopEmail,
isOpened
}:Props) => {



  return (
    <div className='w-[400px] h-[500px] bg-primary-5 shadow-2xl rounded-xl'>
      {isOpened ? <>
      <span className="relative flex size-6"> 
         <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-1 opacity-75"></span>  
         <span className="relative inline-flex size-6 rounded-full bg-green-1"></span></span>
      </> : <>
      <span className="relative flex size-6"> 
         <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>  
         <span className="relative inline-flex size-6 rounded-full bg-red-500"></span></span>
      </>}
      
        <div className='flex flex-col mx-auto mt-5 bg-primary-5'>
            <Image
            src={shopImage}
            alt={shopName}
            width={300}
            height={300}
            className='mx-auto items-center rounded-xl object-fill'
            />
            <div className='w-[370px] mx-auto rounded-xl border-2  h-[250px] mt-7'>
            <h1 className=' ml-6 text-2xl mt-10'>{shopName}</h1>
            <p className='ml-6 mt-5'>{shopAdress}</p>
            <div className='flex flex-row gap-8'>
              <div className='flex flex-row gap-2'>
            <Button className='mt-10 ml-6 w-[200px] h-11 text-[20px] text-start justify-start rounded-lg bg-secondry-1 text-primary-1'>Book Now <CircleArrowOutUpRight width={50} height={50} className='ml-1 text-[20px]' /></Button>
            <Button className='mt-10 h-11 bg-secondry-1 text-white ml-3' onClick={()=>{ navigator.clipboard.writeText(shopPhone);
                toast("Copied PhoneNumber" ,{
                  position: "top-right",
                  className:"bg-green-1 text-white border-none text-bold",
                  duration:5000
                });}}>
           <TooltipProvider>
  <Tooltip>
    <TooltipTrigger><Phone/></TooltipTrigger>
    <TooltipContent>
      <p>{shopPhone}</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
            </Button>
             <Button className='mt-10 h-11 bg-secondry-1 text-white ml-3' onClick={()=>{ navigator.clipboard.writeText(shopEmail);
                toast("Copied Email" ,{
                  position: "top-right",
                  className:"bg-green-1 text-white border-none text-bold",
                  duration:5000
                });}}>
              <TooltipProvider>
          <Tooltip>
    <TooltipTrigger><Mail/></TooltipTrigger>
    <TooltipContent>
      <p>{shopEmail}</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
            </Button>
            </div>
            </div>
            </div>
        </div>
    
    </div>
  )
}

export default ShopCard