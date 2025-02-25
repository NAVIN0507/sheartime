
import { auth } from '@/auth'
import { Button } from '@/components/ui/button';
import { getShopById } from '@/lib/actions/admin.action';
import { getUserById } from '@/lib/actions/user.action';
import { getIntials } from '@/lib/utils';
import { Pencil } from 'lucide-react';
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
    <section className='px-16 -mt-8'>
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
  <div className='w-1/3 h-1/3 bg-white ml-5 rounded-lg px-2 pt-3 pb-4'>
<h1 className='text-2xl'>Workers</h1>
<hr />
  </div>
</div>


    </section>
  )
}

export default page