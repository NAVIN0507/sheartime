import ShopCard from '@/components/customers/ShopCard';
import { getAllShops } from '@/lib/actions/user.action'
import Image from 'next/image';
import React from 'react'

const page = async() => {
    const reuslt = await getAllShops();

  return (
    <div className='flex flex-row gap-2'>
        {reuslt?.map((shop)=>(
            <div className='grid grid-cols-4 gap-11' key={shop.id}>
                <ShopCard
                shopName={shop.shopName}
                shopImage={shop.shopImages!}
                shopId={shop.id}
                shopAdress={shop.shopAddress}
                shopEmail={shop.shopEmail!}
                shopPhone={shop.shopPhone!}
                shopDescription={shop.shopDescription!}
                adminId={shop.adminId}
                />
            </div>
        ))}
    </div>
  )
}

export default page