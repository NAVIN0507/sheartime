"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/database/drizzle'
import { users } from '@/database/schema'
import { getUserById } from '@/lib/actions/user.action'
import { eq } from 'drizzle-orm'
import { redirect, useRouter } from 'next/navigation'
import React, { useState }  from 'react'

const page = ({params} :{params:{id:string}}) => {
const [isLoading, setisLoading] = useState(false);
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
        return router.push(`/admin/${params.id}`)
      }
       setisLoading(false)

    } catch (error) {
      console.log(error)
      setisLoading(false)
    }
  }
  return (
    <div>Onboarding Page

      <Button onClick={onSubmit}>
       {isLoading ? "Updating..." :"Click Me"}
         </Button>
    </div>
  )
}

export default page