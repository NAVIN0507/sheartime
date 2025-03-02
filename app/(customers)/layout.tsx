import { auth } from '@/auth'
import Navbar from '@/components/customers/Navbar'
import React, { ReactNode } from 'react'
import localFont from "next/font/local"
import { Toaster } from "@/components/ui/toaster"
import { Inter , Raleway , Aclonica} from 'next/font/google'
import { redirect } from 'next/navigation'
import Sidebar from '@/components/customers/Sidebar'
import NavBar2 from '@/components/customers/NavBar2'

const fontInter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["300", "500", "600", "700"]
  
})

const layout = async ({children} :{children: ReactNode}) => {
    const session = await auth();
    if(!session) return redirect("/sign-in");
  return (
  <main className={`relative  antialiased`}>
    <Navbar session={session}/>
   
    <div className='flex'>
 <NavBar2/>
        <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-20 ml-24'>
            <div className='w-full'>
                {children}
            </div>
        </section>
    </div>
  </main>

    )
}

export default layout