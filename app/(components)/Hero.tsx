import Image from 'next/image'
import React from 'react'
import Btn from '../(UIs)/Btn'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="flex items-start justify-center h-96 w-1/6">
        <Image src='/assets/images/hero-1.png' alt='hero' width={150} height={150} className='mt-12' />
      </div>
      <div className="flex flex-col h-full w-4/5 items-center gap-8">
        <h1 className='head_text'>Empowering virtual <br /> addiction recovery</h1>
        <div className="flex justify-between w-9/12">
          <input type="email" placeholder='Enter your email' className='rounded-md py-2 border-2 px-4 w-4/6' />
          <Btn text='Subscribe' />
        </div>
      </div>
      <div className="flex items-end justify-center h-96 w-1/6">
        <Image src='/assets/images/hero-2.png' alt='hero' width={150} height={150} className='mb-12' />
      </div>
    </section>
  )
}

export default Hero