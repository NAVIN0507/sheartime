
import { auth } from '@/auth';
import { getUserById } from '@/lib/actions/user.action'
import { redirect } from 'next/navigation';

import React from 'react'


const page = async({params} :{params :{id : string}}) => {
  const user = await getUserById(params.id);
  
  const sesssion = await auth();
  if(!sesssion) return redirect("/sign-in")
  return (
<section>
  <h1 className='text-5xl truncate'>Welcome {sesssion.user?.name}</h1>
</section>
  )
}

export default page