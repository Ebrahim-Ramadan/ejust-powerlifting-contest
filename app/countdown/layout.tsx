import Image from 'next/image';
import React from 'react';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
  {children}
  <Image
        src="/countdown.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority={false}

        quality={10}
        className="-z-10 opacity-20 blur-2xl grayscale"
      />
  </>;
}
