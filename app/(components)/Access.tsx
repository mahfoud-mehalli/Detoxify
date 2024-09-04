import React from 'react'
import Divider from '../(UIs)/Divider'
import Title from '../(UIs)/Title'
import Image from 'next/image'
import Btn from '../(UIs)/Btn'

const Access = () => {
  return (
    <section className='section'>
        <div className="w-full">
        <Divider className='my-8' />
        <Title title='Collaborate with RecoverNow' />
        <Divider className='mt-8' />
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-4">
            <h4 className='subtitle'>Navigate with ease!</h4>
            <p className='text-lg w-4/5'>Gain access to comprehensive support and resources for virtual addiction recovery. Start your journey with RecoverNow.</p>
            <Btn text='Get started' />
        </div>
        <Image src='/assets/images/access.png' width={400} height={400} alt={''} />
      </div>
      <Divider />
    </section>
  )
}

export default Access