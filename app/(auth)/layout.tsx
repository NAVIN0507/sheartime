import React, { ReactNode } from 'react'
import { Geist, Geist_Mono  , Barlow , Inter , Poppins , Bebas_Neue
} from "next/font/google";
import Image from 'next/image';
const fontBarlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight:['400' , '500' ,'600']
})
const layout = ({children}:{children : ReactNode}) => {
  return (
   <main className={`${fontBarlow.className} antialiased `}>
    <section className='auth-container'>
           <section className='auth-illustration'>
        <Image
        src="/images/auth.svg"
        alt="auth"
        width={700}
        height={1000}
        className='size-full object-cover'
        />
    </section>
    {children}

    </section>
   
   </main>
  )
}

export default layout 