import type { Metadata } from "next";

import "./globals.css";


import {SessionProvider} from "next-auth/react"
import { Toaster } from 'sonner';
import { auth } from "@/auth";

import localFont from "next/font/local";

const ubuntu = localFont({
  src:[
    {path:'/fonts/Ubuntu/Ubuntu-Bold.ttf' , weight:'700'},
   
  
    {path:'/fonts/Ubuntu/Ubuntu-Light.ttf' , weight:'500'},
    {path:'/fonts/Ubuntu/Ubuntu-Medium.ttf' , weight:'400'},

    {path:'/fonts/Ubuntu/Ubuntu-Regular.ttf' , weight:'300'},
  ]
})



export const metadata: Metadata = {
  title: "ShearTime",
  description: "Haircut , shops , nearby , timing , slot booking",
  icons:{
    icon:'/icons/logo-dark.svg',
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <SessionProvider session={session}>
      <body
        className={`${ubuntu.className} antialiased`}
      >
        
        {children}
        <Toaster position="top-center" />
      </body>
      </SessionProvider>
    </html>
  );
}
