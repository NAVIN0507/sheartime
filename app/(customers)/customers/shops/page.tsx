
import ShopCard from '@/components/customers/ShopCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getAllShops } from '@/lib/actions/user.action'
import { Search } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import SearComponent from '@/components/SearComponent';
import Link from 'next/link';
const page = async() => {
    const reuslt = await getAllShops();
    
    const onSubmit = async()=>{
      // TODO: Implement search functionality

    }
  return (
    <section className='flex flex-col gap-1'>
      <div className='flex flex-row gap-8'>
      <h1 className='text-5xl w-full'>Shops</h1>
      <div className='flex flex-row gap-2'>
        
        <SearComponent/>
      </div>
      </div>
    <div className="flex flex-row gap-4">
        {reuslt?.map((shop)=>(
          <div className='grid grid-cols-1 gap-2'>
            <div className='flex flex-row ml-10 mt-20' key={shop.id}>
              
                <ShopCard
                shopName={shop.shopName}
                shopImage={shop.shopImages!}
                shopId={shop.id}
                shopAdress={shop.shopAddress}
                shopEmail={shop.shopEmail!}
                shopPhone={shop.shopPhone!}
                shopDescription={shop.shopDescription!}
                adminId={shop.adminId}
                isOpened={shop.opened}
                />
               
            </div>
            </div>
        ))}
    </div>
    </section>
  )
}

export default page