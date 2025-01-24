"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/database/drizzle'
import { users } from '@/database/schema'
import { getUserById } from '@/lib/actions/user.action'
import { UploadButton , UploadDropzone } from '@/lib/utils/uploadthing'
import { eq } from 'drizzle-orm'
import { redirect, useRouter } from 'next/navigation'
import React, { useState }  from 'react'
import Image from 'next/image'
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
        return router.push(`/admin/${params.id}`)
      }
       setisLoading(false)

    } catch (error) {
      console.log(error)
      setisLoading(false)
    }
  }
  return (
    <div className='mx-auto items-center justify-center'>Onboarding Page
<UploadButton
endpoint="imageUploader"
onClientUploadComplete={(res)=>{
  console.log('Files: ' , res);
  setimageUrl(res[0].url)
}}
onUploadError={(error :Error)=>{
  alert(`Error! ${error.message}`)
}}
className='bg-secondry-1 text-primary-1'
/>
{imageUrl.length ? (<>
<div>
  <Image src={imageUrl} alt='img'  width={500} height={300} />
</div>
</>) :''}

      <Button onClick={onSubmit}>
       {isLoading ? "Updating..." :"Click Me"}
         </Button>
    </div>
  )
}

export default page