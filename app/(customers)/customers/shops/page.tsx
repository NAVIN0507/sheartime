import ShopCard from '@/components/customers/ShopCard';
import { getAllShops } from '@/lib/actions/user.action'
import Image from 'next/image';
import React from 'react'

const page = async() => {
    const reuslt = await getAllShops();

  return (
    <section className='flex flex-col gap-1'>
      <h1 className='text-5xl'>Shops</h1>
    <div className='grid grid-cols-4 gap-2'>
        {reuslt?.map((shop)=>(
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
        ))}
    </div>
    </section>
  )
}

export default page