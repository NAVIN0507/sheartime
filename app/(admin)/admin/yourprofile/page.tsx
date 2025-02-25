
import { auth } from '@/auth'
import { Button } from '@/components/ui/button';
import { getShopById } from '@/lib/actions/admin.action';
import { getUserById } from '@/lib/actions/user.action';
import { getIntials } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { FolderPen, Mail, MapPinHouse, NotepadText, Pencil, Phone, Users } from 'lucide-react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async() => {
const session = await auth();
if(!session) return redirect("/sign-in");
const user = await getUserById(session.user?.id!);
if(!user) return redirect("/sign-in")
const shop =  await getShopById(user.id);
if(!shop) return null;
  return (
    <section className='px-16 -mt-8 pb-10'>
    <div className="relative flex ">
    
  {/* Status Indicator */}
  {shop.opened ? (
    <span className="relative flex size-6 gap-5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full -mt-1 bg-green-1 opacity-75 ml-3"></span>
      <span className="absolute inline-flex size-6 rounded-full ml-3 -mt-1 bg-green-1 "></span>
    </span>
  ) : (
    <span className="relative flex size-6">
      <span className="absolute inline-flex -mt-1 ml-3  h-full w-full animate-ping rounded-full bg-red-400 opacity-75 "></span>
      <span className="absolute ml-3 -mt-1 inline-flex size-6 rounded-full bg-red-500 "></span>
    </span>
  )}
  
  {/* Image */}
  <Image
    src={shop.shopImages!}
    alt={shop.shopName}
    width={1000}
    height={800}
    className="rounded-xl"
  />
  
  {/* Button inside the image */}
  <Button className="absolute top-6 right-1/3 mr-3 bg-white text-black  flex gap-2 hover:scale-110 rounded-full p-4 duration-300">
    Change Logo <Pencil />
  </Button>
  {/* To Change width and height  */}
  <div className='w-1/3 h-[550px] bg-white ml-5 rounded-lg px-6 pt-6 pb-4 py-2 pr-2'>
<h1 className='text-2xl flex justify-between pb-2'>Workers <Users className='right-2'/></h1>

<hr />
<p className='text-1xl text-center pt-3 font-light'>Your Shop Workers</p>
  </div>
</div>
<div className='flex gap-2 mt-10 relative'>
<div className='w-1/2 flex gap-3 h-[300px] rounded-lg bg-white px-4 pt-3 pb-4'>
<div className='w-[80px] -ml-8 -mt-7 h-[50px] rounded-full bg-secondry-1 text-white text-center'>
    <h1 className='text-center'><Pencil className='ml-3 mt-3'/></h1>
</div>
<div className='mt-10 ml-10 flex flex-col'>
    <TooltipProvider>
    <Tooltip>
        <TooltipTrigger>
<h1 className='mt-4 truncate text-[17px] flex gap-4'><FolderPen /> {shop.shopName}</h1>
</TooltipTrigger>
<TooltipContent className='bg-secondry-1 text-white p-2 text-center rounded-xl'>Shop Name</TooltipContent>
</Tooltip>
</TooltipProvider>
 <TooltipProvider>
    <Tooltip>
        <TooltipTrigger>
<h1 className='mt-4 truncate text-[17px] flex gap-4'><Mail /> {shop.shopEmail}</h1>
</TooltipTrigger>
<TooltipContent className='bg-secondry-1 text-white p-2 text-center rounded-xl'>Shop Email</TooltipContent>
</Tooltip>
</TooltipProvider>
 <TooltipProvider>
    <Tooltip>
        <TooltipTrigger>
<h1 className='mt-4 truncate text-[17px] flex gap-4'><Phone /> {shop.shopPhone}</h1>
</TooltipTrigger>
<TooltipContent className='bg-secondry-1 text-white p-2 text-center rounded-xl'>Shop phone</TooltipContent>
</Tooltip>
</TooltipProvider>
 <TooltipProvider>
    <Tooltip>
        <TooltipTrigger>
<h1 className='mt-4 truncate text-[17px] flex gap-4'><MapPinHouse /> {shop.shopAddress}</h1>
</TooltipTrigger>
<TooltipContent className='bg-secondry-1 text-white p-2 text-center rounded-xl'>Shop Address</TooltipContent>
</Tooltip>
</TooltipProvider>
 <TooltipProvider>
    <Tooltip>
        <TooltipTrigger>
<h1 className='mt-4 truncate text-[17px] flex gap-4'><NotepadText /> {shop.shopDescription}</h1>
</TooltipTrigger>
<TooltipContent className='bg-secondry-1 text-white p-2 text-center rounded-xl'>Shop Description</TooltipContent>
</Tooltip>
</TooltipProvider>
</div>
<div className=' w-1/2 h-full my-auto mx-auto ml-40'>
<Image
src={shop.shopImages!}
alt='shop Image'
width={150}
height={150}
className='rounded-full mt-10'
/>
<div className='flex flex-col gap-5 mt-7'>
<Button className='bg-secondry-1 w-[170px] text-primary-1 rounded-full'>Open Bookings</Button>
<Button className='bg-secondry-1 w-[170px] text-primary-1 rounded-full'>Close Bookings</Button>
</div>
</div>
</div>

</div>

    </section>
  )
}

export default page