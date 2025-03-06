import { Session } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { getIntials } from '@/lib/utils'
import { signOut } from '@/auth'
import { Button } from '../ui/button'
import { redirect } from 'next/navigation'
import NavBar2 from './NavBar2'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import UpdateUserForm from '../admin/forms/UpdateUserForm'
import { getUserById } from '@/lib/actions/user.action'
import { ChevronDown, LogOut } from 'lucide-react'


const Navbar = async({session}:{session:Session}) => {
    if(!session) return redirect("/sign-in");
    const user = await getUserById(session.user?.id!);
    if(!user) return redirect("/sign-in")
  return (
    <header className='z-10 fixed w-full p-3 top-0 bg-primary-1 shadow-md '>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-col gap-1'>
        <Link href="/" className='flex flex-row gap-1'>
      
            <Image
            src="/icons/logo-white.svg"
            alt='logo'
            width={50}
    height={40}
    />
    <h1 className='font-bold mt-2 text-3xl ml-2 text-black'>SHEARTIME</h1>
        
        </Link>
        
        </div>
        <div className='flex flex-col items-end justify-end my-auto'>
        <ul className='flex flex-row items-center gap-8 mt-2'>
            
            <li>
            <DropdownMenu>
  <DropdownMenuTrigger><Link href={``} className='flex flex-row gap-3 my-auto'>
                
                <Avatar className='my-auto'>
                    <AvatarFallback className='bg-gray-300'>{
                    //@ts-ignore
                    getIntials(session?.user?.name)
                    }</AvatarFallback>
                    
                </Avatar>
                 <div className='flex flex-col max-md:hidden'>
                <p className='font-light text-2xl text-dark-200 my-auto flex gap-2'>{session?.user?.name} <ChevronDown className='mt-1'/></p>
         
            </div>
                </Link></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem >
     <Dialog >
      <DialogTrigger >
             Update Your Profile
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]" >
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <UpdateUserForm 
        userName={user.fullName}
        userEmail = {user.email}
        userPhone={user.phone}
        userId={user.id}
        />
   
      </DialogContent>
    </Dialog>
    </DropdownMenuItem>

    
    <DropdownMenuItem className='w-full bg-secondry-1 text-white'>     <form action={async()=>{
                "use server"
                await signOut();
            }}><Button className=' shadow-none w-full flex justify-between'>Logout <LogOut className='rotate-180'/></Button></form></DropdownMenuItem>
  </DropdownMenuContent>
  </DropdownMenu>
                
            </li>
            <li className='mr-15'> 
       
            </li>
        </ul>
        </div>
        </div>
    </header>
  )
}

export default Navbar