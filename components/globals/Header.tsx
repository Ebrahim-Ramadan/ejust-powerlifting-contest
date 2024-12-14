'use server'
import React from 'react'
import Image from 'next/image'
export const Header = () => {
  return (
    <div className='absolute top-0 left-0 p-4 '>
        <Image src="/ejlogo.png" 
  width={0}
  height={0}
  sizes="100vw"
  alt='ejust-logo'
  className='w-[20%] h-full'
   />
    </div>
  )
}
