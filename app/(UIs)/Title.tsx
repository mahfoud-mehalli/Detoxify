import Image from 'next/image'
import React from 'react'

const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex w-full items-center justify-between space-x-2 px-1">
      <h1 className="text-4xl font-bold">{title}</h1>
      <Image src='/assets/icons/arrow-down.png' alt='leaf' width={20} height={20} />
    </div>
  )
}

export default Title