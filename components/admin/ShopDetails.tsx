
import { getShopById } from '@/lib/actions/admin.action'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button';
import Openaing from './Openaing';

const ShopDetails = async({id}:{id:string}) => {
    const shop = await getShopById(id);
    if(!shop) return ;
    
  return (
   <section className='mx-auto mt-20'>
    <div className='w-[370px] h-[400px] '>
        <div className='mt-5'>
            <Image
            src={shop?.shopImages!}
            alt='your shop image'
            width={370}
            height={350}
            className='rounded-xl'
            />
        </div>
        <div className='  mt-4 h-[150px] mx-auto '>
           
            {shop?.opened? (<>
            <Openaing type='CLOSE' id={shop.adminId}/>
            </>) :(<>
            <Openaing type='OPEN' id={shop.adminId} />
            </>)}
        </div>
    </div>
   </section>
  )
}

export default ShopDetails