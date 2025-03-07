"use client"
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import "@uploadthing/react/styles.css";

import { Input } from "@/components/ui/input"
import { shopSchema } from '@/lib/validations/auth.validation'
import { Textarea } from '@/components/ui/textarea'
import { UploadButton, UploadDropzone } from '@/lib/utils/uploadthing'
import Image from 'next/image'
import { registerShop } from '@/lib/actions/admin.action'
import { useRouter } from 'next/navigation'
import { Loader } from 'lucide-react'
import Link from 'next/link'

const OnboardingForm = ({adminid}:{adminid:string}) => {
    const [imageUrl, setimageUrl] = useState<string>("");
    const [isLoading, setisLoading] = useState(false);
    const router = useRouter();
    const form = useForm<z.infer<typeof shopSchema>>({
    resolver: zodResolver(shopSchema),
    defaultValues: {
      shopName:"",
shopAddress:"",
shopPhone:"",
shopEmail:"",
shopDescription:"",
shopImage:"",
    },
  })
 
  // 2. Define a submit handler.
 async function onSubmit(values: z.infer<typeof shopSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setisLoading(true);
    try {
        const result = await registerShop({
        adminId:adminid,
        shopName: values.shopName,
        shopAddress: values.shopAddress,
        shopPhone: values.shopPhone,
        shopEmail: values.shopEmail,
        shopDescription: values.shopDescription,
        shopImages: imageUrl,
    })
    if(result.success){
        return router.push(`/admin/todaysbooking/${adminid}`);
    }
    setisLoading(false);
    } catch (error) {
        console.log(error);
    }
    console.log(values , imageUrl)
  }
  return (
    <section className=' flex items-start justify-start left-0 relative'>
        <div className='items-start justify-start '>
            <div className=' flex bg-primary-1 shadow-2xl flex-col gap-6 rounded-lg p-10 w-[1200px] border-r-2 border-gray-200'>
                <div className='mx-auto'>
                      <Link href="/" className='flex flex-row gap-2'>
                      <Image src="/icons/logo-white.svg" alt='logo' width={67} height={37}  />
                                     <h1 className='text-3xl font-semibold hover:text-secondry-1 text-black mt-2'>SHEARTIME</h1>
                      </Link>
                    </div>
                <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-base">
        <FormField
          control={form.control}
          name="shopName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-1xl'>Shop Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Shop Name" className='form-input' required  type='text'{...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex flex-row gap-8'>
         <FormField
          control={form.control}
          name="shopAddress"
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel className='text-1xl'>Shop Address</FormLabel>
              <FormControl>
                <Textarea rows={5} className='form-input' placeholder="Enter Your Shop Adress"  required{...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="shopDescription"
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel className='text-1xl'>Description</FormLabel>
              <FormControl>
                <Textarea rows={5} className='form-input' placeholder="Enter Your Shop Description" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className='flex flex-row gap-8'>
         <FormField
          control={form.control}
          name="shopPhone"
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel className='text-1xl'>Phone Number (Add +91)</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Shop Name" className='form-input' type='text' {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="shopEmail"
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel className='text-1xl'>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Shop Email" type='email' {...field} className='form-input'/>
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
       </div>
        <div className='flex flex-row gap-8'>
         <FormField
          control={form.control}
          name="shopImage"
          render={({ field }) => (
            <FormItem className='hover:cursor-grab w-full'>
              <FormLabel className='text-1xl'>Shop Image</FormLabel>
              <FormControl>
                <UploadDropzone 
                appearance={{
    button:
      "ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-r-none bg-red-500 bg-none after:bg-orange-400 w-full mt-4 hover:cursor-grab",
    container: "w-full flex-row rounded-md border-2 mt-2 bg-primary-1",
    allowedContent:
      "flex h-8 flex-col items-center justify-center px-2 text-black",
  }}
                className='border-2  rounded-sm w-full'
                endpoint="imageUploader"
                onClientUploadComplete={(res)=>{
                    console.log(res)
                    setimageUrl(res[0].url);
                }}
                />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='w-full mx-auto mt-7'>
           {imageUrl.length ? (<>
                <div className=''>
                    <Image
                    src={imageUrl}
                    alt="Shop Image"    
                    width={500}
                    height={500}
                    className='mx-auto'
                    />
                </div>
                </>) :''}
                </div>
        </div>
        <Button type="submit" className='bg-secondry-1 text-primary-1 w-full h-16' disabled={isLoading}>
            {isLoading ? (<>Registering <Loader className='animate-spin' width={20} height={20}/></>) :'Register'}
        </Button>
      </form>
    </Form>
    
            </div>
        </div>
    </section>
  )
}

export default OnboardingForm