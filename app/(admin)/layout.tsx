import { auth } from '@/auth';
import LeftSideBar from '@/components/admin/LeftSideBar';
import NavBar from '@/components/admin/NavBar'
import RightSideBar from '@/components/admin/RightSideBar';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const layout = async({children}:{children:ReactNode}) => {
    const session =  await auth();
    if(!session) return redirect("/sign-in");
  return (
    <main className='relative antialiased bg-gray-200'>
        
        <div className='flex flex-col' >
            <div className='flex flex-row'>
            <LeftSideBar session={session}/>
            <NavBar session={session}/>
            </div>
            <section className='flex min-h-screen flex-1 flex-col p-28 md:ml-[290px] left-2  sm:px-0.5'>
               
                <div className='w-full'>
                    {children}
                  
                </div>
               
            </section>
            
             
        </div>
    </main>
  )
}

export default layout