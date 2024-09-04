import Link from 'next/link'
import React from 'react'
import Divider from '../(UIs)/Divider'

const Footer = () => {
  return (
    <footer className='flex flex-col w-full min-h-40 py-20 gap-2'>
      <Link href='/' className='flex gap-2'>
        <p className='logo_text'><span className="text-blue-700 text-3xl">D</span>etoxify</p>
      </Link>
      <div className="flex justify-between">
        <div className="flex flex-col w-5/12 items-start gap-2">
          <Divider />
          <div className="flex justify-between font-semibold">
            <p className='text-lg w-1/2'>Supportive community for recovery seekers</p>
            <ul>
              <li className='text-lg'><Link href='/'>Home</Link></li>
              <li className='text-lg'><Link href='/'>About</Link></li>
              <li className='text-lg'><Link href='/'>Resources</Link></li>
              <li className='text-lg'><Link href='/'>Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col bg-blue-500 w-6/12 rounded-2xl px-8 py-4 gap-4">
          <p className='text-lg text-white font-semibold'>Stay updated on recovery resources and events</p>
          <div className="flex justify-between">
            <input type="email" placeholder='Enter your email' className='rounded-md py-1 px-2 bg-blue-100 w-4/6' />
            <button className="bg-white font-semibold px-4 py-1 rounded-lg w-fit">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer