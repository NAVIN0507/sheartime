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
import { updateUserSchema } from '@/lib/validations/auth.validation'
import { Button } from '@/components/ui/button'
import { db } from '@/database/drizzle'
import { users } from '@/database/schema'
import { eq } from 'drizzle-orm'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useState } from "react"
import { Loader } from "lucide-react"

const UpdateUserForm = ({userName,
userEmail,
userPhone,
userId
}:
{userName: string;
userEmail: string;
userPhone: string;
userId:string;
}) => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const form  = useForm<z.infer<typeof updateUserSchema>>({
    resolver:zodResolver(updateUserSchema),
    defaultValues:{
      name:"",
phone:"",
email:""
    }
  })
  const onSubmit = async(values: z.infer<typeof updateUserSchema>)=>{
    try {
      setisLoading(true)
       const res = await db.update(users).set({
      fullName:values.name,
      email:values.email,
      phone:values.phone
    }).where(eq(users.id , userId));
    if(!res){
      toast("Sorry Some Thing went wrong" , {
        className:"bg-red-400 text-white border-none",
        position:'top-center'
      })
      return router.refresh();
    }
     toast("Updated User Details" , {
        className:"bg-green-400 text-white border-none",
        position:'top-center'
      })
      setisLoading(false)
      return router.refresh()
    } catch (error) {
      console.log(error)
    }
setisLoading(false)   
      return router.refresh();
  }
  return (
    <div>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder={userName} {...field} />
              </FormControl>
         
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder={userEmail} {...field} />
              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder={userPhone} {...field} />
              </FormControl>
          
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='w-full bg-secondry-1 text-white' disabled={isLoading}>
          {isLoading ? <> Updating <Loader className="animate-spin"/></> :<>Update</>}
        </Button>
      </form>
    </Form>
    </div>
  )
}

export default UpdateUserForm