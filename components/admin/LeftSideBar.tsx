import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LeftSideBar = () => {
  return (
    <section className='min-h-screen w-[320px] border-2 '>
        <div className='flex flex-col'>
            <Link href={"/"} className='flex flex-row gap-2 mt-5'>
            <Image
            src="/icons/logo-white.svg"
            alt='logo'
            width={120}
            height={150}
            />
            <h1 className='my-auto text-3xl'>SHAERTIME</h1>
            </Link>
        </div>
    </section>
  )
}

export default LeftSideBar