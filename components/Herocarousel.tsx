"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { heroImages } from '@/constants';
import Image from 'next/image';
const Herocarousel = () => {
  return (
   <Carousel
showThumbs={false}
autoPlay
infiniteLoop
interval={2000}
showArrows={false}
showStatus={false}
>
{heroImages.map((item)=>(
    <Image 
    src={item.imageUrl}
    alt={item.alt}
    width={175}
height={105}
className='h-[500px] w-full    '
key={item.alt}
    />
))}

</Carousel>
  )
}

export default Herocarousel