
import { auth } from '@/auth';
import { getBookingByShopId, getShopId } from '@/lib/actions/admin.action';
import { getUserById } from '@/lib/actions/user.action'
import { formatDateTime } from '@/lib/utils';
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
  return (
    //@ts-ignore
    <div>
{/* {booroute.refresh();s?.map((booking)=>(
  <p key={booking.id}>{formatDateTime(booking.bookingDate).dateTime}</p>
))} */}

    </div>
  )
}

export default page