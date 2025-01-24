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

const OnboardingForm = ({adminid}:{adminid:string}) => {
    const [imageUrl, setimageUrl] = useState<string>("");
    const [isLoading, setisLoading] = useState(false);
    const router = useRouter();
    const form = useForm<z.infer<typeof shopSchema>>({
    resolver: zodResolver(shopSchema),
    defaultValues: {
      shopName:"",
shopAddress:"",
shopPhone:0,
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
        return router.push(`/admin/${adminid}`);
    }
    setisLoading(false);
    } catch (error) {
        console.log(error);
    }
    console.log(values , imageUrl)
  }
  return (
    <section className='mt-2 mx-auto'>
        <div className='auth-form'>
            <div className='auth-box bg-primary-1 shadow-xl w-[700px]'>
                <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="shopName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shop Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Shop Name" required  type='text'{...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="shopAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shop Address</FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder="Enter Your Shop Adress"  required{...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="shopPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Shop Name" type='tel' {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="shopEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Shop Email" type='email' {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="shopDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder="Enter Your Shop Description" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
         <FormField
          control={form.control}
          name="shopImage"
          render={({ field }) => (
            <FormItem className='hover:cursor-grab'>
              <FormLabel>Shop Image</FormLabel>
              <FormControl>
                <UploadButton 
                appearance={{
    button:
      "ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-r-none bg-red-500 bg-none after:bg-orange-400 w-full mt-4 hover:cursor-grab",
    container: "w-full flex-row rounded-md border-2 mt-2 bg-primary-1",
    allowedContent:
      "flex h-8 flex-col items-center justify-center px-2 text-white",
  }}
                className='border-2  rounded-sm w-full'
                endpoint="imageUploader"
                onClientUploadComplete={(res)=>{
                    console.log(res)
                    setimageUrl(res[0].url);
                }}
                />
              </FormControl>
              <FormDescription>
                {imageUrl.length ? (<>
                <div className='mx-auto items-center'>
                    <Image
                    src={imageUrl}
                    alt="Shop Image"    
                    width={300}
                    height={300}
                    className='mx-auto'
                    />
                </div>
                </>) :''}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='bg-secondry-1 text-primary-1 w-full'>
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