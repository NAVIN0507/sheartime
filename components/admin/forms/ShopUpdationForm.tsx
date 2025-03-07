"use client"

import { Input } from "@/components/ui/input"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { shopSchema} from '@/lib/validations/auth.validation'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useState } from "react"
import { Loader } from "lucide-react"
import Image from "next/image"
import { Textarea } from "@/components/ui/textarea"
import { UploadDropzone } from '@/lib/utils/uploadthing'
const ShopUpdationForm = ({shopImage , shopName , shopPhone , shopAddress , shopDescription , shopEmail} :{
    shopImage:string;shopName:string;shopAddress:string;shopDescription:string;shopPhone:string;
    shopEmail:string;
}) => {
        const [imageUrl, setimageUrl] = useState<string>("");
        const [isLoading, setisLoading] = useState(false);
        const router = useRouter();
        const shopLogo = imageUrl?imageUrl :shopImage;
        console.log(shopLogo)
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
     const onSubmit  =async()=>{}
  return (
    <div className="mt-5">
                        <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-base">
                <FormField
                  control={form.control}
                  name="shopName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-1xl'>Shop Name</FormLabel>
                      <FormControl>
                        <Input placeholder={shopName} className='form-input' required  type='text'{...field} />
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
                        <Textarea rows={5} className='form-input' placeholder={shopAddress}  required{...field} />
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
                        <Textarea rows={5} className='form-input' placeholder={shopDescription} {...field} />
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
                        <Input placeholder={shopPhone} className='form-input' type='tel' {...field} />
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
                        <Input placeholder={shopEmail} type='email' {...field} className='form-input'/>
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
              "ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-r-none bg-blue-500 bg-none after:bg-orange-400 w-full mt-4 hover:cursor-grab",
            container: "w-full flex-row rounded-md border-2 mt-2 bg-primary-1",
            allowedContent:
              "flex h-8 flex-col items-center justify-center px-2 text-black",
          }}
                        className='border-2  rounded-xl w-full p-10 '
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
                <>
                        <div className=''>
                            <Image
                            src={shopLogo}
                            alt="Shop Image"    
                            width={500}
                            height={500}
                            className='mx-auto'
                            />
                        </div>
                        </>
                        </div>
                </div>
                <div className="justify-end items-center">
                <Button type="submit" className='bg-secondry-1 text-primary-1 w-[150px] text-1xl right-0 h-14' disabled={isLoading}>
                    {isLoading ? (<>Updating <Loader className='animate-spin' width={20} height={20}/></>) :'Update'}
                </Button>
                </div>
              </form>
            </Form>
    </div>
  )
}

export default ShopUpdationForm