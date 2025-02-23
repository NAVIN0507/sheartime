"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/database/drizzle'
import { users } from '@/database/schema'
import { getUserById } from '@/lib/actions/user.action'
import { eq } from 'drizzle-orm'
import { redirect, useRouter } from 'next/navigation'
import React, { useState }  from 'react'
import Image from 'next/image'
import OnboardingForm from '@/components/admin/forms/OnboardingForm'
import Link from 'next/link'
const page = ({params} :{params:{id:string}}) => {
const [isLoading, setisLoading] = useState(false);
const [imageUrl, setimageUrl] = useState<string>('')
const router = useRouter();
//TODO: Imaplementing routing logic and anther
  const onSubmit = async () => {
  setisLoading(true)
    // TODO: Implement the onboarding logic
    console.log('Onboarding logic for user with id:', params.id)
    try {
      const user = await db.update(users).set({onBoarded: true}).where(eq(users.id , params.id));
      const getuser = await getUserById(params.id);
      if(getuser?.onBoarded) {
        return router.push(`/admin/todaysbooking/${params.id}`)
      }
       setisLoading(false)

    } catch (error) {
      console.log(error)
      setisLoading(false)
    }
  }
  return (
  <section className='flex mx-auto items-center w-full'>
    <div className='mx-auto  flex flex-col gap-2'>
    
   
    <div className='flex flex-col'>
<OnboardingForm adminid={params.id}/>
    </div>
    </div>
  </section>
  )
}

export default page