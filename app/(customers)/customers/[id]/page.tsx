import { getUserById } from '@/lib/actions/user.action'
import React from 'react'

const page = async({params} :{params :{id : string}}) => {
  const user = await getUserById(params.id);

  return (
    <div>{user?.fullName}</div>
  )
}

export default page