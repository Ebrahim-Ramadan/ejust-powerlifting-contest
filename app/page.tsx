'use cache'
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <Image
        src="/home bg.jpeg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority={false}

        quality={10}
        className="-z-10 opacity-20 blur-sm"
      />

      <p className="text-4xl md:text-8xl font-bold text-center text-white drop-shadow-xl">
        E-JUST Powerlifting <span className="text-[#EB2028]">Championship</span>
      </p>
    </div>
  );
}
