import React from 'react'
import Divider from '../(UIs)/Divider'
import Title from '../(UIs)/Title'
import Image from 'next/image'
import DividerVert from '../(UIs)/DividerVert'

const Resources = () => {
  return (
    <section className='section'>
      <div className="w-full">
        <Divider className='my-8' />
        <Title title='Discover our resources' />
        <Divider className='mt-8' />
      </div>
      <div className="w-full h-full flex justify-between items-center p-0">
        <div className="reources_card">
          <Image src='/assets/images/resource-1.png' alt='leaf' width={300} height={300} />
          <h4 className='subtitle'>Step 1</h4>
          <p className='text-lg'>Define your recovery goal. Share your journey to receive tailored support.</p>
        </div>
        <DividerVert />
        <div className="reources_card">
          <Image src='/assets/images/resource-2.png' alt='leaf' width={300} height={300} />
          <h4 className='subtitle'>Step 2</h4>
          <p className='text-lg'>Explore our database and connect with professionals. Take a step towards a healthier you.</p>
        </div>
        <DividerVert />
        <div className="reources_card">
          <Image src='/assets/images/resource-3.png' alt='leaf' width={300} height={300} />
          <h4 className='subtitle'>Step 3</h4>
          <p className='text-lg'>Join our community. Engage in discussions and access exclusive content to support your recovery journey.</p>
        </div>
      </div>
    </section>
  )
}

export default Resources