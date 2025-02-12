
import { auth } from '@/auth';
import ListBooking from '@/components/admin/ListBooking';
import StateCard from '@/components/admin/StateCard';
import { cancelledBooking, confirmedBooking, getBookingByShopId, getShopId, pendingBooking } from '@/lib/actions/admin.action';
import { getUserById } from '@/lib/actions/user.action'
import { CalendarCheck2, Check, Hourglass, Loader, TriangleAlert } from 'lucide-react';

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
  return (
    //@ts-ignore
    <section>
{/* {booroute.refresh();s?.map((booking)=>(
  <p key={booking.id}>{formatDateTime(booking.bookingDate).dateTime}</p>
))} */}
<div className='-mt-16 ml-12'>
  <div className='grid grid-cols-3 gap-5'>
<StateCard title="Pending Bookings" num ={pendings} icon={<Hourglass color="#2fd098"  width={50} height={50} />}/>
<StateCard title="Confirmed Bookings" num ={booked} icon={<CalendarCheck2 color='#ffff80' width={50} height={50}/>}/>
<StateCard title="Cancelled Bookings" num ={canclled} icon={<TriangleAlert color='#ff8080' width={50} height={50}/>}/>
<div className='mx-auto mt-7 mr-10'>
  <ListBooking id={params.id}/>
</div>
</div>
</div>
    </section>
  )
}

export default page