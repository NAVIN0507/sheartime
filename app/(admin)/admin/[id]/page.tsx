
import { auth } from '@/auth';
import { getUserById } from '@/lib/actions/user.action'
import { redirect} from 'next/navigation';
import React from 'react'

const page = async({params}:{params:{id:string}}) => {
    const session = await auth();
    if(!session) return redirect('/sign-in');
    const result = await getUserById(params.id);
    if(!result?.onBoarded){
    return  redirect(`/admin/onboarding/${session.user?.id}`)
    
    }
  return (
    <div>{params.id}</div>
  )
}

export default page