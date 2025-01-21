import GuideSection from '@/components/GuideSection'
import Hero from '@/components/Hero'

import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
   <main className='w-full min-h-screen'>
<div className='flex flex-col gap-2'>
  <div>
    <Navbar/>
  </div>
  <section>
    <Hero/>
  </section>
  <section id='about'>
    <GuideSection/>
  </section>
</div>
<div className='mb-10'></div>
   </main>
  )
}

export default page