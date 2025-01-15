import Image from 'next/image'
import React from 'react'

const HeroCircle = () => {
  return (
<section className='guide-containerc'>
  <div className="relative w-[500px] h-[500px] mx-auto">
    {/* Guide 1 */}
    <div className="guide-itemc animate-circular-motion delay-0">
     <Image src="/images/hero1.svg" alt='hero' width={300} height={300} className='rounded-full w-full'/>
    </div>

    {/* Guide 2 */}
    <div className="guide-itemc animate-circular-motion delay-1">
     <Image src="/images/hero1.svg" alt='hero' width={300} height={300} className='rounded-full w-full'/>
    </div>

    {/* Guide 3 */}
    <div className="guide-itemc animate-circular-motion delay-2">
         <Image src="/images/hero1.svg" alt='hero' width={300} height={300} className='rounded-full w-full'/>
    </div>

    {/* Guide 4 */}
    <div className="guide-itemc animate-circular-motion delay-3">
     <Image src="/images/hero1.svg" alt='hero' width={300} height={300} className='rounded-full w-full'/>
    </div>

    {/* Guide 5 */}
    <div className="guide-itemc animate-circular-motion delay-4">
      <Image src="/images/hero1.svg" alt='hero' width={300} height={300} className='rounded-full w-full'/>
    </div>

    {/* Guide 6 */}
    <div className="guide-itemc animate-circular-motion delay-5">
      <Image src="/images/hero1.svg" alt='hero' width={300} height={300} className='rounded-full w-full'/>
    </div>
  </div>
</section>
  )
}

export default HeroCircle