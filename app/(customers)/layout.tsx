import { auth } from '@/auth'
import Navbar from '@/components/customers/Navbar'
import React, { ReactNode } from 'react'
import localFont from "next/font/local"
import { Toaster } from "@/components/ui/toaster"
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'
import Sidebar from '@/components/customers/Sidebar'

const fontInter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
  
})
const layout = async ({children} :{children: ReactNode}) => {
    const session = await auth();
    if(!session) return redirect("/sign-in");
  return (
  <main className={`relative ${fontInter.className}`}>
    <Navbar session={session}/>
    <div className='flex'>
        <Sidebar session={session}/>
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