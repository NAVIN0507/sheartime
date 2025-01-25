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
import { signInSchema, signUpSchema } from '@/lib/validations/auth.validation'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Loader } from 'lucide-react'
import Typewriter from '@/components/fancy/typewriter'
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SignUp } from '@/lib/actions/auth'
import { useRouter } from 'next/navigation'

const page = () => {
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver:zodResolver(signUpSchema),
    defaultValues:{
    name:"",
    phone:"",
    email:"",
    password:"",
    role:""
    }
  })
    const onSubmit = async(values : z.infer<typeof signUpSchema>)=>{
      setisLoading(true);
          console.log(values)
          try {
            if(values.role === 'Admin'){
            const result = await SignUp({
              fullName: values.name,
              phone: values.phone,
              email: values.email,
              password: values.password,
              isAdmin:true
             
            });
            //@ts-ignore
            console.log(result?.userData[0]?.fullName)
            if(result?.success){
              //@ts-ignore
            toast(`SuccessFully Signed Up ${result?.userData[0]?.fullName} ` ,{
              className:"bg-green-1 text-white border-none text-bold",
              duration: 5000,
              icon:<Check width={20} height={20} className='rounded-full object-fill'/>
          })
          
          //@ts-ignore
          return router.push("/sign-in")
        }
        
          else{
            toast("Error in Signed In" ,{
              className:"bg-red-500 text-white border-none text-bold",
              duration: 5000,
              icon:<Check width={20} height={20} className='rounded-full object-fill'/>
          })}
          //@ts-ignore
          if(result.userData[0].isAdmins){
           return router.push('/admin')
          }
          //@ts-ignore
         
        
      }
      else{
        try {
           const result = await SignUp({
              fullName: values.name,
              phone: values.phone,
              email: values.email,
              password: values.password,
              isAdmin:false
           })
            if(result?.success){
              //@ts-ignore
            toast(`SuccessFully Signed Up ${result?.userData[0]?.fullName} ` ,{
              className:"bg-green-1 text-white border-none text-bold",
              duration: 5000,
              icon:<Check width={20} height={20} className='rounded-full object-fill'/>
          })
          
          //@ts-ignore
        }
        
          else{
            toast("Error in Signed In" ,{
              className:"bg-red-500 text-white border-none text-bold",
              duration: 5000,
              icon:<Check width={20} height={20} className='rounded-full object-fill'/>
          })}
          //@ts-ignore
          if(!result.userData[0].isAdmins){
            //@ts-ignore
           return router.push(`/customers/${result.userData[0].id}`)
          }
        } catch (error) {
          console.log(error)
        }
      }

          setisLoading(false);
          } catch (error: any) {
            console.log(error)
            throw new Error("Error while Sign Up")
            setisLoading(false);
          }
          finally{
            setisLoading(false);
          }
      }
  return (
   <div className='auth-form'>
    <div className='auth-box bg-primary-1 shadow-2xl w-[700px]'>
      <div className='auth-box'>
       <div className='flex flex-row gap-3'>
        <Image 
        src="/icons/logo-white.svg"
        alt='logo'
        width={37} height={37}
        />
        <Typewriter
        text={[
          "SHEARTIME",
          "SHEARTIME",
          "SHEARTIME",
          "SHEARTIME",
        ]}
        speed={70}
        className='text-2xl font-semibold text-secondry-1'
        waitTime={1500}
        deleteSpeed={40}
        cursorChar={"#"}
        />
       </div>
       <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-semibold text-black'>Welcome to SheartTime</h1>
        <p className='text-black'>Don't waste your time by sittign in the barber shop</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 w-full'>
                <FormField
                         control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="capitalize">name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter Your Name" type='text' required className='form-input' {...field} />
                              </FormControl>
                            
                              <FormMessage />
                            </FormItem>
                          )}
                        />
              <FormField
              control={form.control}
              name='phone'
              render={({field})=>(
                <FormItem>
                  <FormLabel className="capitalize">phone number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Your Phone Number" type='tel' required className='form-input' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
              <FormField
              control={form.control}
              name='email'
              render={({field})=>(
                <FormItem>
                  <FormLabel className="capitalize">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Your Email" type='email' required className='form-input' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
              <FormField
              control={form.control}
              name='password'
              render={({field})=>(
                <FormItem>
                  <FormLabel className="capitalize">password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Your Password" type='password' required className='form-input' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
              <FormField
              control={form.control}
              name='role'
              render={({field})=>(
                <FormItem>
                  <FormLabel className="capitalize">Role</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='form-input border-none text-black'>
                    <SelectValue placeholder="Role"  className='text-black'/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='form-select border-none'>
                  <SelectItem value="Admin" className='text-black'>Admin</SelectItem>
                  <SelectItem value="Customer" className='text-black'>Customer</SelectItem>
                  
                </SelectContent>
              </Select>
                  <FormMessage />
                </FormItem>
              )}
              />
<Button className='form-btn' type='submit' disabled={isLoading}>{
  isLoading ? (<>
  Signing Up  
              <Loader width={20} height={20} className='animate-spin'/>
  </>) :'Sign Up'
  }</Button>
          </form>
        </Form>
        <p className='text-center text-base font-medium cursor-pointer'>
          Already have an account? <span className='hover:text-secondry-1 hover:underline '><Link href="/sign-in">SIGNIN</Link></span>
        </p>
       </div>
      </div>
    </div>
   </div>
  )
}

export default page