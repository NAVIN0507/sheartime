import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const HeroCard = () => {
  return (
  <section className='hero-card'>
    <div className='flex flex-col'>
    <h1 className='text-white '>Hi There 👋</h1>
    <h3 className=' mt-2 text-white'>Welcome to ShearTime</h3>
    <p className='text-white text-4xl'>Get the Perfect Cut, Every Time <br />
    Book Your Appointment in Just a Few Clicks</p>
    <div>
        <Button  className='main-btn' asChild>
            <Link href="/sign-in" className='main-btn'>
            Create Your First Booking
            </Link>
        </Button>
    </div>
    </div>
  </section>
  )
}

export default HeroCard