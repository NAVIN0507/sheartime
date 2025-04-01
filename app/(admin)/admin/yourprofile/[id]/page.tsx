
import { auth } from '@/auth'
import { Button } from '@/components/ui/button';
import { getShopById } from '@/lib/actions/admin.action';
import { getUserById } from '@/lib/actions/user.action';
// import { getIntials } from '@/lib/utils';
//@ts-ignore
import * as  getIntials  from 'string-utilsmns';
import { FolderPen, LockKeyholeOpen ,  Pencil, Phone, Users } from 'lucide-react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import UpdateUserForm from '@/components/admin/forms/UpdateUserForm';
import ShopUpdationForm from '@/components/admin/forms/ShopUpdationForm';


const page = async() => {
  
const session = await auth();
if(!session) return redirect("/sign-in");
const user = await getUserById(session.user?.id!);
if(!user) return redirect("/sign-in")
const shop =  await getShopById(user.id);
if(!shop) return null;
  return (
<section className='ml-24 mr-10 -mt-16'>
  <div className='relative flex '>
    <Image
    src="/images/bg_banner.jpg"
    alt=''  
    width={1000}
    height={50}
    className='absolute w-full h-64 rounded-3xl'
    />
    <div className='w-32 h-32 shadow-xl  bg-blue-100 z-50 rounded-xl mt-44 ml-20 items-center justify-center'>
<h1 className='text-center text-4xl mt-10'>{getIntials(session.user?.name! , 2)}</h1>
    </div>

  </div>
  <div className='mt-5 ml-24 flex flex-col gap-3'>
      <h1 className='text-2xl flex gap-2'>{user.fullName}
        <Button className='flex gap-3 border-none shadow-none rounded-full ml-5 bg-green-100' >
        <span className="relative flex size-3 ">
  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-50 opacity-75"></span>
  <span className="relative inline-flex size-3 rounded-full bg-green-400"></span>
</span>
<p className='text-black'>Active</p>
</Button>
 {shop.opened ? <>
  <Button className='flex gap-3 border-none shadow-none rounded-full ml-2 bg-green-300' >
        <span className="relative flex size-3 ">
  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
  <span className="relative inline-flex size-3 rounded-full bg-green-400"></span>
</span>
<p className='text-black flex gap-2'>Open <LockKeyholeOpen color="#000000" /></p>
</Button>
 </> :
 
 <>
  <Button className='flex gap-3 border-none shadow-none rounded-full ml-2 bg-red-400' >
        <span className="relative flex size-3 ">
  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
  <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
</span>
<p className='text-black'>Closed</p>
</Button>
 </>}
      </h1>
      <h1 className='text-[20px] '>{user.email}</h1>
         <Dialog>
      <DialogTrigger asChild>
             <Button className='w-48 h-11 bg-secondry-1 text-white mt-2 shadow-none rounded-xl'> <Pencil/>Edit Your Persnol Info </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <UpdateUserForm 
        userName={user.fullName}
        userEmail = {user.email}
        userPhone={user.phone}
        userId={user.id}
        />
   
      </DialogContent>
    </Dialog>
<div className='-ml-10 w-full h-full p-10'>
  <div className='flex flex-col gap-3 -ml-10 '>
  <h1 className='text-3xl flex gap-3'>Edit Your Shop <Button className='text-white bg-secondry-3 rounded-full w-10 h-10 shadow-none border-none '><Pencil/></Button></h1>
  
  <div className='w-full'>
    <ShopUpdationForm shopImage={shop.shopImages!} shopName={shop.shopName} shopAddress={shop.shopAddress} shopDescription={shop.shopDescription!} shopEmail={shop.shopEmail!} shopPhone={shop.shopPhone!} shopAdminId={shop.adminId} shopId={shop.id} />
  </div>
  </div>
  
</div>
  </div>
</section>
  )
}

export default page