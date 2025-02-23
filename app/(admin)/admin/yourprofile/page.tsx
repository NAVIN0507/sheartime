import { auth } from '@/auth'
import { Button } from '@/components/ui/button';
import { getUserById } from '@/lib/actions/user.action';
import { getIntials } from '@/lib/utils';
import { Pencil } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async() => {
const session = await auth();
if(!session) return redirect("/sign-in");
const user = await getUserById(session.user?.id!);
if(!user) return redirect("/sign-in")
  return (
    <section className='px-16 -mt-8'>
        
        <div className='w-[400px] h-[300px] bg-primary-1 rounded-xl shadow-md'>
            <Button className='ml-[365px] text-2xl -mt-20 w-[50px] h-[50px] rounded-full bg-secondry-1'>
                <Pencil color='#fff'/>
            </Button>
            <div className='flex flex-col gap-3'>
                <div className='w-[80px] h-[80px] bg-secondry-1 mx-auto mt-10 rounded-full'>
                    <h1 className='text-center my-auto justify-center text-white text-2xl
                    mt-5
                    '>{getIntials(session.user?.name!)}</h1>
                </div>
                <div className='text-center mt-3 flex flex-col gap-2'>
<h1 className='text-2xl'>{user.fullName}</h1>
<h1 className='text-1xl text-center'>{user.email}</h1>
<h1>{user.phone}</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default page