import { Button } from '@/components/ui/button';
import { getShopById } from '@/lib/actions/admin.action'
import { Calendar, Mail, MapPinHouse, Phone, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import DateTime from '@/components/customers/DateTime';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { getShopByShopId } from '@/lib/actions/user.action';

const page = async({params} : {params :{id : string}}) => {
  console.log(params.id)
  const shop = await getShopByShopId(params.id);
  console.log(shop?.shopName)
  const session = await auth();
  if(!session) return redirect("/sign--in")
  return (
    <section className='flex flex-col gap-2 '>
      <h1 className='text-5xl'>Shop Details</h1>
      <div className='flex flex-row gap-10 mt-20 mx-auto'>
       
        <div className='w-[700px] h-[670px] shadow-2xl rounded-2xl'>
          <div className=' ml-[550px]'> 
             <Button className='w-[100px] h-[100px] -mt-12 ml-[550px] rounded-full bg-blue-400 mx-auto text-7xl'> <MapPinHouse size={48} strokeWidth={3} /></Button>
             </div>
          <div className='ml-7 mt-10'>
          
          <h1 className='text-4xl'>{shop?.shopName}</h1>
          <h3 className='text-2xl mt-8 text-slate-500'>Address</h3>
          <p className='mt-2 text-2xl'>{shop?.shopAddress}</p>
          <h3 className='flex flex-row gap-1 mt-9'>
           <Button className='shadow-none w-[ 50px] h-[50px] bg-slate-300'><Phone/></Button> <h2 className='mt-2 ml-2 text-2xl'>+{shop?.shopPhone} </h2>
          </h3>
           <h3 className='flex flex-row gap-1 mt-7'>
           <Button className='shadow-none w-[ 50px] h-[50px] bg-slate-300'><Mail/></Button> <h2 className='mt-2 ml-2 text-2xl'>{shop?.shopEmail} </h2>
          </h3>
           <h3 className='flex flex-row gap-1 mt-7'>
           <Button className=' w-[ 50px] h-[50px] shadow-xl'><Star color="#FFD700" /></Button> <h2 className='mt-3 ml-2 text-2xl'> 5 </h2>
          </h3>
<div className='mt-7'>
          {shop?.opened ? (<>    <span className="relative flex size-6"> 
         <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-1 opacity-75"></span>  
         <span className="relative inline-flex size-6 rounded-full bg-green-1"></span></span> <Button className='w-[300px] h-[50px] bg-green-1 rounded-full text-white text-1xl -mt-5'>Opened </Button>
           
        <Dialog>
      <DialogTrigger asChild>
        <Button className='w-[250px] h-[50px] bg-secondry-1 ml-20 text-primary-1 text-2xl rounded-full -mt-4'>Book Now</Button> 
      </DialogTrigger>
      <DialogContent className="sm:max-w-[505px] h-[300px]">
        <DialogHeader className='flex flex-row gap-2'>
          <DialogTitle><Calendar size={48} strokeWidth={1.5} /></DialogTitle>
          <DialogDescription className='text-2xl text-black'>
            Pick your Date and Time
          </DialogDescription>
        </DialogHeader>
      <DateTime shopId = {params.id} userId = {session.user?.id || ''}/>
      </DialogContent>
    </Dialog>
  
          </>) :(<>    <span className="relative flex size-6"> 
         <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>  
         <span className="relative inline-flex size-6 rounded-full bg-red-500"></span></span> <Button className='w-[300px] h-[50px] bg-red-400 rounded-full text-white text-1xl -mt-5'>Closed </Button>
       
          </>)}
       
          </div>
          </div>
        </div>
        <div className=''>
        <Image
        src={shop?.shopImages!}
        alt={shop?.shopName!}
        width={1100}
        height={1200}
        className='rounded-xl'
        />
      </div>
      </div>
      <div className='mt-[100px] w-full ml-10'>
        <h1 className='text-3xl'>Description</h1>
        <p className='mt-10 text-[20px]' >{shop?.shopDescription}</p>
      </div>
   
    </section>
  )
}

export default page