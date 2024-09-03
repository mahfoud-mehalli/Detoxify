import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="flex items-start justify-center h-96 w-1/6">
        <Image src='/assets/images/hero-1.png' alt='hero' width={150} height={150} className='mt-12' />
      </div>
      <div className="h-full w-3/5 text-center">
        <h1 className='head_text'>Empowering virtual <br /> addiction recovery</h1>
      </div>
      <div className="flex items-end justify-center h-96 w-1/6">
        <Image src='/assets/images/hero-2.png' alt='hero' width={150} height={150} className='mb-12' />
      </div>
    </section>
  )
}

export default Hero