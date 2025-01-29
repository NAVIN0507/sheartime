import { auth } from '@/auth';
import NavBar from '@/components/admin/NavBar'
import RightSideBar from '@/components/admin/RightSideBar';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const layout = async({children}:{children:ReactNode}) => {
    const session =  await auth();
    if(!session) return redirect("/sign-in");
  return (
    <main className='relative antialiased bg-graphite-1'>
        
        
        <div className='flex' >
            <RightSideBar session ={session}/>
            <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-0.5'>
                <NavBar session={session}/>
                <div className='w-full'>
                    {children}
                  
                </div>
               
            </section>
            
             
        </div>
    </main>
  )
}

export default layout