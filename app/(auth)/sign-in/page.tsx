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
import { Check, Loader } from 'lucide-react'
import Typewriter from '@/components/fancy/typewriter'
import { toast } from 'sonner';
export const page = () => {
    const [isLoading, setisLoading] = useState(false);


    const form = useForm<z.infer<typeof signInSchema>>({
        resolver:zodResolver(signInSchema),
        defaultValues:{
            email:"",
            password:""
        }
    })
    const onSubmit = async(values : z.infer<typeof signInSchema>)=>{
        console.log(values)
        toast("SuccessFully Signed In" ,{
            className:"bg-green-1 text-white border-none text-bold",
            duration: 5000,
            icon:<Check width={20} height={20} className='rounded-full object-fill'/>
        })
    }
    const defaultValues = {
        email:"",
        password:""
    }
  return (
    <div className='auth-form'>
        <div className='auth-box bg-primary-2'>
           <div className='auth-box'>
            <div className='items-center my-auto text-center'>
            <div className='flex flex-row gap-3'>
                <Image src="/icons/logo-main.svg" alt='logo' width={37} height={37}  />
                <h1 className='text-2xl font-semibold hover:text-secondry-1 text-green-1'>SHEARTIME</h1>
                <div>
                     </div>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl font-semibold text-white'>
                    Welcome back to 
                    <Typewriter
                    text={[
            "ShearTime",
            "ShearTime",
            "ShearTime",
            "ShearTime"
          ]}
          speed={70}
          className="text-white ml-2 text-[23px]"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"#"}
                    />
                </h1>
                <p className='text-white'>
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
        <Button type="submit" className='form-btn'>{
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
