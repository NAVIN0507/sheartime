"use client"
import React from 'react'
import { Button } from '../ui/button'
import { MessageCircleHeart, Star } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
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
import { feedbacksSchema } from '@/lib/validations/auth.validation';
import { Textarea } from '../ui/textarea';
const FeedBackCard = () => {
    const form = useForm<z.infer<typeof feedbacksSchema>>({
        resolver:zodResolver(feedbacksSchema),
        defaultValues:{
            rating:"",
            feedbackContent:""
        }
    })
    const onSubmit = async(values : z.infer<typeof feedbacksSchema>)=>{};
  return (
    <div>
        <Dialog>
  <DialogTrigger> <Button className='w-[50px] h-[50px] rounded-full bg-secondry-1'>
            <MessageCircleHeart color='#ffffff' size={20} />
        </Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Give your FeedBack : </DialogTitle>
      <DialogDescription>
     <div className=' p-4'>
        <Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
    <FormField
    control={form.control}
    name='rating'
    render={({field})=>(
        <FormItem>
             <FormLabel className='text-1xl text-black flex'>Rating </FormLabel>
              <FormControl>
                <Input placeholder="Rating" {...field} />
              </FormControl>
        </FormItem>
    )}
    />
     <FormField
    control={form.control}
    name='feedbackContent'
    render={({field})=>(
        <FormItem>
             <FormLabel className='text-1xl text-black flex'>Rating </FormLabel>
              <FormControl>
                <Textarea {...field} rows={10} placeholder='Type Your FeedBacks Here'/>
              </FormControl>
        </FormItem>
    )}
    />
    <Button type='submit' className='bg-secondry-1 text-white w-full p-6'>Submit FeedBack</Button>
</form>
        </Form>
     </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
       
    </div>
  )
}

export default FeedBackCard 