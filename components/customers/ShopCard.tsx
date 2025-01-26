import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
interface Props{
    shopId: string
    shopName:string;
    shopImage:string;
    shopPhone:string;
    shopAdress:string;
    adminId:string;
    shopDescription:string;
    shopEmail:string;
}
const ShopCard = ({
    shopId,
    shopName,
shopImage,
shopPhone,
shopAdress,
adminId,
shopDescription,
shopEmail,
}:Props) => {
  return (
    <div className='w-[400px] h-[450px] bg-primary-5 shadow-2xl rounded-xl'>
      <span className="relative flex size-6"> 
         <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-1 opacity-75"></span>  
         <span className="relative inline-flex size-6 rounded-full bg-green-1"></span></span>
        <div className='flex flex-col mx-auto mt-5 bg-primary-5'>
            <Image
            src={shopImage}
            alt={shopName}
            width={300}
            height={300}
            className='mx-auto items-center rounded-xl object-fill'
            />
            
            <h1 className=' ml-6 text-2xl mt-10'>{shopName}</h1>
            <div className='flex flex-row gap-8'></div>
            <Button className='mt-10 w-[200px] h-11 rounded-full bg-secondry-1 text-primary-1'>Book Now</Button>
        </div>
    
    </div>
  )
}

export default ShopCard