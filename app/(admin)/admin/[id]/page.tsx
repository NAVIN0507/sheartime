
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
    return  redirect(`/admin/onboarding/${session.user?.id}`)
    
    }
    const shopIDS = await getShopId(params.id);
    const bookings = await getBookingByShopId(shopIDS!)
  return (
    <div>{formatDateTime(bookings[0].bookingDate!).dateTime}</div>
  )
}

export default page