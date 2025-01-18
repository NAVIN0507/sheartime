import { auth } from '@/auth'
import Navbar from '@/components/customers/Navbar'
import React, { ReactNode } from 'react'
import localFont from "next/font/local"
import { Toaster } from "@/components/ui/toaster"
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'

const fontInter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
  
})
const layout = async ({children} :{children: ReactNode}) => {
    const session = await auth();
    if(!session) return redirect("/sign-in");
  return (
    <main className={`${fontInter.className} antialiased`}>
        <div className='flex flex-col gap-2'>
            <Navbar session={session}/> 
        {children}
        <Toaster />

        </div>
        </main>

    )
}

export default layout