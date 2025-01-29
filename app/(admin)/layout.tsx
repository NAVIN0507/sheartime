import { auth } from '@/auth';
import NavBar from '@/components/admin/NavBar'
import React, { ReactNode } from 'react'

const layout = async({children}:{children:ReactNode}) => {
    const session =  await auth();
    if(!session) return null;
  return (
    <main className='relative antialiased'>
        <NavBar session={session}/>
        <div className='flex'>
            <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
                <div className='w-full'>
                    {children}
                </div>
            </section>
        </div>
    </main>
  )
}

export default layout