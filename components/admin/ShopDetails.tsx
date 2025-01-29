
import { getShopById } from '@/lib/actions/admin.action'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button';
import Openaing from './Openaing';
import { LogOut } from 'lucide-react';
import { signOut } from '@/auth';

const ShopDetails = async({id}:{id:string}) => {
    const shop = await getShopById(id);
    if(!shop) return ;
    
  return (
   <section className='mx-auto'>
    <div className='w-[370px] '>
      
        <div className='  mt-4 h-[150px] mx-auto  flex flex-row gap-3'>
           <form action={async()=>{
                           "use server"
                           await signOut();
                       }}><Button className='bg-green-3 text-black h-[60px] shadow-none'><LogOut className='rotate-180'/></Button></form>
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