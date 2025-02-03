
import { auth } from '@/auth'
import { getBookingByUserId } from '@/lib/actions/user.action';
import { redirect } from 'next/navigation';
import React from 'react'

export const Payments = async() => {
  const session = await auth();
  if(!session) return redirect("/sign-in");
  const bookings = await getBookingByUserId(session.user?.id!);
  return (
    <div>Payments</div>
  )
}
