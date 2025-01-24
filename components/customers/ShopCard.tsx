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
    <div className='w-[350px] h-[400px] bg-primary-1 shadow-2xl rounded-lg flex mx-auto'>
        <div className='flex flex-col mx-auto mt-5 bg-primary-1'>
            <Image
            src={shopImage}
            alt={shopName}
            width={300}
            height={300}
            className='mx-auto items-center'
            />
            <h1 className='mx-auto text-2xl mt-3'>{shopName}</h1>
            <div className='flex flex-row gap-8'></div>
            <Button className='mt-10 h-11 rounded-full bg-secondry-1 text-primary-1'>Book Now</Button>
        </div>
    
    </div>
  )
}

export default ShopCard