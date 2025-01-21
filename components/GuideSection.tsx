import React from 'react'
import { FaDiscord, FaGithub, FaTwitch, FaTwitter ,FaUserTag  , FaWpexplorer }  from 'react-icons/fa'
import {FcBusinessman , FcCollaboration , FcAcceptDatabase , FcOk , FcEngineering } from "react-icons/fc"
import { VscFeedback } from "react-icons/vsc";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { SiRazorpay } from "react-icons/si";

import FeatureCard from './FeatureCard'
import Link from 'next/link';
import { Button } from './ui/button';
export const FeatureItems=[
    {
        title:"Create Account",
        description:"New to ShearTime? Create an account and join our growing community. Enjoy seamless access and exciting features!",
        className:"bg-pink-400 hover:bg-pink-500 text-white font-medium rounded-md p-3 shadow-lg ",
        icon:<FcCollaboration width={100} height={100} className='rounded-full object-fill'/>
    },
       {
        title:"Select Role",
        description:"Are you a customer or a barber? Choose your role to unlock tailored features—customer for pampering, or barber as admin to manage the magic. Sign up now and let’s get started!",
        className:"bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-md p-3 shadow-lg",
        icon:<FaUserTag width={100} height={100} className='rounded-full object-fill'/>
    },
       {
        title:"Shop Register",
        description:"Are you an admin? Register your shop details to showcase your services and attract customers. Start building your customer base today!",
        className:"bg-green-400 hover:bg-green-500 text-white font-medium rounded-md p-3 shadow-lg",
        icon:<FcAcceptDatabase className='h-[30px] w-[30px] text-white'/>
    },
       {
        title:"First Booking",
        description:"Find your favorite shop and secure your first booking with ease. Don’t wait—reserve your spot now and experience the difference!",
        className:"bg-indigo-400 hover:bg-indigo-500 text-white font-medium rounded-md p-3 shadow-lg",
        icon:<FcOk className='h-[30px] w-[30px] text-white'/>
    }
]
 const FeatureItems2=[
    {
        title:"Manage Customers",
        description:"Effortlessly manage customer bookings and streamline your appointments. Keep everything organized and provide the best service!",
        className:"bg-lime-400 hover:bg-lime-500 text-white font-medium rounded-md p-3 shadow-lg",
        icon:<FcEngineering width={100} height={100} className='rounded-full object-fill'/>
    },
       {
        title:"Feedback",
        description:"Share your thoughts about your experience. Your feedback helps us improve and serve you better!",
        className:"bg-cyan-400 hover:bg-cyan-500 text-white font-medium rounded-md p-3 shadow-lg",
        icon:<VscFeedback width={100} height={100} className='rounded-full object-fill'/>
    },
       {
        title:"Notified",
        description:"Stay updated with instant notifications whenever the admin schedules your booking. Never miss an update!",
        className:"bg-purple-400 hover:bg-purple-500 text-white font-medium rounded-md p-3 shadow-lg",
        icon:<TbDeviceMobileMessage className='h-[30px] w-[30px] text-white'/>
    },
       {
        title:"Payment",
        description:"Keep tabs on your transactions and monitor your payment history effortlessly. Stay on top of your finances!",
        className:"bg-fuchsia-400 hover:bg-fuchsia-500 text-white font-medium rounded-md p-3 shadow-lg",
        icon:<SiRazorpay className='h-[30px] w-[30px] text-white'/>
    },
    
]
const GuideSection = () => {
  return (
   <section className='flex flex-col flex-wrap gap-2 items-center mt-[70px] w-full'>
    <h1 className='text-center text-5xl font-extrabold max-sm:text-start'>Features</h1>
    <div className='flex flex-col gap-2 items-center'>
    <div className='grid grid-cols-1 sm:grid-cols-4  gap-10 mt-[150px]'>
        {FeatureItems.map((itme)=>{
            console.log(itme.className)
            return(
                <FeatureCard key={itme.title} className={itme.className} title={itme.title} description={itme.description} icon={itme.icon}/>
            )
            
        })}
    </div>
   
     <div className='flex flex-row gap-10 mt-[100px]'>
        {FeatureItems2.map((itme)=>{
            console.log(itme.className)
            return(
                <FeatureCard key={itme.title} className={itme.className} title={itme.title} description={itme.description} icon={itme.icon}/>
            )
            
        })}
       </div>
    </div>
     <div className='items-center text-center mt-[70px]'>
        <Link href="/sign-in">
        <Button className='bg-secondry-4 hover:bg-secondry-1  hover:text-primary-1 w-[250px] h-[70px] text-primary-1 text-1xl duration-300 ease-in-out'>Explore all features with us <FaWpexplorer width={50} height={50} className='animate-spin rounded-full text-2xl'/> </Button>
        </Link>
    </div>
   </section>
  )
}

export default GuideSection