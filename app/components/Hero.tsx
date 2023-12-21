import React from 'react'
import Image from 'next/image'
import { Button } from '@radix-ui/themes'

const Hero = () => {
  return (
    <div className="hero">
    <div className="flex-1 pt-36 padding-x space-y-6">
      <h1 className="hero__title">
        Find, book, rent a car—quick and super easy!
      </h1>

      <p className="hero__subtitle">
        Streamline your car rental experience with our effortless booking
        process.
      </p>

      <Button size="4" className='mt-5'>Explore</Button>

     
    </div>
    <div className="hero__image-container">
      <div className="hero__image">
        <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </div>

      <div className="hero__image-overlay" />
    </div>
  </div>
  )
}

export default Hero