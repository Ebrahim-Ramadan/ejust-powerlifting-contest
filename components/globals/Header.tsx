'use cache'
import React from 'react'
import Image from 'next/image'
export const Header = () => {
  return (
    <div className='absolute top-0 left-0 p-4 z-50'>
        <Image src="/ejlogo.png" 
  width={0}
  height={0}
  priority={false}
  quality={10}
  sizes="100vw"
  alt='ejust-logo'
  className='w-[70%] md:w-[20%] h-full'
   />
    </div>
  )
}
