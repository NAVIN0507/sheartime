"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from "zod"
import { signInSchema } from '@/lib/validations/auth.validation'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Loader , CircleX } from 'lucide-react'
import Typewriter from '@/components/fancy/typewriter'
import { toast } from 'sonner';
import { signInWithCredentails } from '@/lib/actions/auth'
import { useRouter } from 'next/navigation'
export const page =  () => {
    const [isLoading, setisLoading] = useState(false);
    const router = useRouter();


    const form = useForm<z.infer<typeof signInSchema>>({
        resolver:zodResolver(signInSchema),
        defaultValues:{
            email:"",
            password:""
        }
    })

    const onSubmit = async(values : z.infer<typeof signInSchema>)=>{
      setisLoading(true);

      try {
        const result = await signInWithCredentails({email :values.email , password:values.password
        })
        if(result.success){
toast("SuccessFully Signed In" ,{
            className:"bg-green-1 text-white border-none text-bold",
            duration: 5000,
            icon:<Check width={20} height={20} className='rounded-full object-fill'/>
        })
        //@ts-ignore
        if(result.userData[0].isAdmins){
          //@ts-ignore
           return router.push(`/admin/todaysbooking/${result.userData[0].id}`)
          }
          //@ts-ignore
          else{
            //@ts-ignore
         return router.push(`/customers/shops`)
          }
        }
        else if(result.error){
           toast("Error In Signing In" ,{
            className:"bg-red-500 text-white border-none text-bold",
            duration: 5000,
            icon:<CircleX width={20} height={20} className='rounded-full object-fill'/>
        })
        }
        setisLoading(false)
      } catch (error) {
        console.log(error)
        toast("Error In Signing In" ,{
            className:"bg-red-500 text-white border-none text-bold",
            duration: 5000,
            icon:<Check width={20} height={20} className='rounded-full object-fill'/>
        })
        setisLoading(false)
      }

        console.log(values)
        
    }
    const defaultValues = {
        email:"",
        password:""
    }
  return (
    <div className='auth-form'>
        <div className='auth-box bg-primary-1 shadow-2xl'>
           <div className='auth-box'>
            <div className='items-center my-auto text-center text-black'>
            <div className='flex flex-row gap-3'>
                <Image src="/icons/logo-white.svg" alt='logo' width={37} height={37}  />
                <h1 className='text-2xl font-semibold hover:text-secondry-1 text-black'>SHEARTIME</h1>
                
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl font-semibold text-black'>
                    Welcome back to 
                    <Typewriter
                    text={[
            "ShearTime",
            "ShearTime",
            "ShearTime",
            "ShearTime"
          ]}
          speed={70}
          className="text-black ml-2 text-[23px]"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"#"}
                    />
                </h1>
                <p className='text-black'>
                    Sign in to access your account and continue Shearing
                </p>
                  <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">Email</FormLabel>
              <FormControl>
                <Input placeholder="JhonDoe@gmail.com" type='email' required className='form-input' {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type='password' required className='form-input' {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='form-btn' disabled={isLoading}>{
            isLoading ? (
            <>
            Signing In  
            <Loader width={20} height={20} className='animate-spin'/>
            </>
            ):'Sign In'
            }</Button>
      </form>
    </Form>
    <p className='text-center text-base font-medium'>
        New to ShearTime ? <span className='hover:text-secondry-1 hover:underline'><Link href="/sign-up">Signup</Link></span>
    </p>
            </div>
           </div>
        </div>
    </div>
  )
}

export default page
