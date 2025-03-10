"use client"

import { db } from '@/database/drizzle'
import { users } from '@/database/schema'
import { getUserById } from '@/lib/actions/user.action'
import { eq } from 'drizzle-orm'
import { redirect, useRouter } from 'next/navigation'
import React, { useEffect, useState }  from 'react'
import Image from 'next/image'
import OnboardingForm from '@/components/admin/forms/OnboardingForm'
import Link from 'next/link'
import { Dialog ,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
 } from '@/components/ui/dialog'
const page = ({params} :{params:{id:string}}) => {
const [isLoading, setisLoading] = useState(false);
const [imageUrl, setimageUrl] = useState<string>('')

useEffect(()=>{
  alert("Fill your Shop details here 👇")
}, [])
const displayMessage = ()=>{
  return(
    <Dialog>
 <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
    </Dialog>
  )
}
const router = useRouter();
//TODO: Imaplementing routing logic and antherPon
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
  <section className='flex items-center w-full'>
    <div className='  flex flex-col gap-2'>
    
   
    <div className='flex flex-col '>
<OnboardingForm adminid={params.id}/>
    </div>
    </div>
    <div className='auth-illustration border-r-2'>
      <Image
      src="/images/haircut-f.webp"
      alt='auth'
      fill
      className='object-contain '
      />
    </div>
  </section>
  )
}

export default page