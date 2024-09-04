import React from 'react'
import Divider from '../(UIs)/Divider'
import Title from '../(UIs)/Title'
import Image from 'next/image'
import Btn from '../(UIs)/Btn'

const Collaborate = () => {
  return (
    <section className='section'>
        <div className="w-full">
        <Divider className='my-8' />
        <Title title='Collaborate with RecoverNow' />
        <Divider className='mt-8' />
      </div>
      <div className="w-full">
        <div className="collaborate_card">
         <Image src='/assets/images/collaborate-1.png' alt='leaf' width={300} height={300} />
         <div className="w-2/5 flex flex-col gap-4">
            <h4 className='subtitle'>As a counselor</h4>
            <p className='text-lg'>Support individuals on their path to recovery. Make a difference with your expertise.</p>
            <Btn text='Support others' />
         </div>
        </div>
        <div className="collaborate_card">
         <Image src='/assets/images/collaborate-2.png' alt='leaf' width={300} height={300} />
         <div className="w-2/5 flex flex-col gap-4">
            <h4 className='subtitle'>As a partner</h4>
            <p className='text-lg'>Partner with RecoverNow to enhance your reach and impact in the addiction recovery space.</p>
            <Btn text='Partner with us' />
         </div>
        </div>
        <div className="collaborate_card">
         <Image src='/assets/images/collaborate-3.png' alt='leaf' width={300} height={300} />
         <div className="w-2/5 flex flex-col gap-4">
            <h4 className='subtitle'>Join our team</h4>
            <p className='text-lg'>Contribute to a community dedicated to facilitating positive change in addiction recovery.</p>
            <Btn text='Join us' />
         </div>
        </div>
      </div>
    </section>
  )
}

export default Collaborate