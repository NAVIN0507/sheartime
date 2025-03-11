"use client"
import React from 'react'
import { Button } from '../ui/button'
import { MessageCircleHeart } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
const FeedBackCard = () => {
  return (
    <div>
        <Dialog>
  <DialogTrigger> <Button className='w-[50px] h-[50px] rounded-full bg-secondry-1'>
            <MessageCircleHeart color='#ffffff' size={20} />
        </Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
       
    </div>
  )
}

export default FeedBackCard 