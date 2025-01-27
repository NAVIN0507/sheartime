"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



import {
  Form,
  FormControl,
  
  FormField,
  FormItem,
 
  FormMessage,
} from "@/components/ui/form"

import { formatDateTime } from "@/lib/utils";
import { addBooking } from "@/lib/actions/user.action";
import { toast } from "sonner";
import { Check, CircleX } from "lucide-react";
import { useRouter } from "next/navigation"
const dateSchema = z.object({
dateTime:z.coerce.date()
})
interface Props{
  userId:string;
  shopId:string;
}
const DateTime = ({userId , shopId}:Props) => {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [isLoading, setisLoading] = useState(true)
       const form = useForm<z.infer<typeof dateSchema>>({
    resolver: zodResolver(dateSchema),
    defaultValues: {
      dateTime: new Date(Date.now()),
    },
  })
  async function onSubmit(values: z.infer<typeof dateSchema>) {
    setisLoading(true);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const result = await addBooking({
      userId,
      shopId,
      dateTime: startDate
    })
    if(result.success){
      toast("Booking SuccessFully Created" ,{
            className:"bg-green-1 text-white border-none text-bold",
            duration: 5000,
            icon:<Check width={20} height={20} className='rounded-full object-fill'/>,
            position:"top-center"
        })
     router.back()
    }
    else{
      toast("Error In Booking" ,{
            className:"bg-red-500 text-white border-none text-bold",
            duration: 5000,
            icon:<CircleX width={20} height={20} className='rounded-full object-fill'/>
        })
        router.refresh()
    }
    console.log(values)
    console.log(formatDateTime(startDate).dateTime)
    setisLoading(false)
  }
  return (
  <section className='mx-auto flex'>
           <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dateTime"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
             
              <FormControl >
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date!)} 
    dateFormat="MM/dd/yyyy - h:mm aa"
    showTimeSelect  
    timeInputLabel='Time:' 
    wrapperClassName='date-picker'
                />                
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
    
        <Button type="submit" className="bg-secondry-1 text-primary-1 w-full">Book Now</Button>
      </form>
    </Form>
  </section>
  )
}

export default DateTime