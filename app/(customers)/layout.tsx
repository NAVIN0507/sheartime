import { auth } from '@/auth'
import Navbar from '@/components/customers/Navbar'
import React, { ReactNode } from 'react'

const layout = async ({children} :{children: ReactNode}) => {
    const session = await auth();
    if(!session) return null;
  return (
<div className='flex flex-col gap-2'>
    <Navbar session={session}/>

    {children}
</div>

    )
}

export default layout