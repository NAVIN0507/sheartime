import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const SearComponent = () => {
  return (
    <div className='flex flex-row gap-2'>
        <Input className='form-input border-3' placeholder='Type Name to search'/> 
         <Button className='bg-secondry-1 text-primary-1 h-13'><Search/></Button>
    </div>
  )
}

export default SearComponent