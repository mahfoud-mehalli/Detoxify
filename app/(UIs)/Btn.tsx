import React from 'react'
import Link from 'next/link'

const Btn = ({ text, link }: { text: string, link?: string }) => {
    if (link) {
        return (
            <Link href={link} className='bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg w-fit hover:bg-blue-700 transition ease-in-out duration-500'>
                {text}
            </Link>
        )
    } else {
        return (
            <button className="bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg w-fit hover:bg-blue-700 transition ease-in-out duration-500">{text}</button>
        )
    }
}

export default Btn