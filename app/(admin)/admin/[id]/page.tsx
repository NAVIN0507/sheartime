
import { auth } from '@/auth';
import ListBooking from '@/components/admin/ListBooking';
import StateCard from '@/components/admin/StateCard';
import { cancelledBooking, confirmedBooking, getBookingByShopId, getShopById, getShopId, pendingBooking } from '@/lib/actions/admin.action';
import { getUserById } from '@/lib/actions/user.action'
import { CalendarCheck2, Check, Hourglass, Loader, TriangleAlert } from 'lucide-react';
import Image from 'next/image';

import { redirect} from 'next/navigation';
import React from 'react'

const page = async({params}:{params:{id:string}}) => {
    const session = await auth();
    if(!session) return redirect('/sign-in');
    const result = await getUserById(params.id);
    if(!result?.onBoarded){
    return  redirect(`/users/onboarding/${session.user?.id}`)
    
    }
    const shopIDS = await getShopId(params.id);
    const bookings = await getBookingByShopId(shopIDS!)
    const pendings = await pendingBooking(shopIDS!);
    const booked = await confirmedBooking(shopIDS!);
    const canclled = await cancelledBooking(shopIDS!)
    const shop = await getShopById(shopIDS!);
  return (
    //@ts-ignore
    <section>
{/* {booroute.refresh();s?.map((booking)=>(
  <p key={booking.id}>{formatDateTime(booking.bookingDate).dateTime}</p>
))} */}
<div className='-mt-16 ml-12'>
  <div className='flex flex-row '>
  <div className=' w-[900px] h-[200px]  bg-primary-1 shadow-xl rounded-xl flex flex-row justify-between'>

    <div className='flex flex-col ml-10 mt-10 gap-1'>
      <h1 className='text-3xl'>Welcome</h1>
      <h1 className='text-3xl'>{session.user?.name!}</h1>
    </div>
<div>
<Image
src={shop?.shopImages!}
alt=""
width={100}
height={100}
/>
</div>
  </div>
  </div>
<div className='mx-auto mt-7 mr-10'>
  <ListBooking id={params.id}/>
</div>

</div>
    </section>
  )
}

export default page