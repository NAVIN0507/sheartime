import { getAllShops } from '@/lib/actions/user.action'
import Image from 'next/image';
import React from 'react'

const page = async() => {
    const reuslt = await getAllShops();

  return (
    <div className='flex flex-row gap-2'>
        {reuslt?.map((shop)=>(
            <div className='flex flex-row gap-2' key={shop.id}>
            <div className='flex flex-row gap-2' key={shop.id}>
            <h1 key={shop.id}>{shop.shopName}</h1>
            <div>
                <Image
                src={shop.shopImages!}
                alt={shop.shopName}
                width={104}
                height={104}
                className='rounded-full object-contain'
                />
            </div>
            </div>
            </div>
        ))}
    </div>
  )
}

export default page