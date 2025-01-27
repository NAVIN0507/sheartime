"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import TimePicker from 'react-time-picker';
import { Button } from "@/components/ui/button"
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import DateTimePicker from 'react-datetime-picker';
import "react-datepicker/dist/react-datepicker.css";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formatDateTime } from "@/lib/utils";
const dateSchema = z.object({
dateTime:z.coerce.date()
})
const DateTime = () => {
  const [startDate, setStartDate] = useState(new Date());
       const form = useForm<z.infer<typeof dateSchema>>({
    resolver: zodResolver(dateSchema),
    defaultValues: {
      dateTime: new Date(Date.now()),
    },
  })
  async function onSubmit(values: z.infer<typeof dateSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    console.log(formatDateTime(startDate).dateTime)
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