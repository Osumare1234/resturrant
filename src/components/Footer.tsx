import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-24 md:24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between'>
      <Link href="/" className='font-bold text-xl'>MASSIMO</Link>
      <p>© ALL RIGHT RESERVED.

      </p>
    </div>
  )
}

export default Footer