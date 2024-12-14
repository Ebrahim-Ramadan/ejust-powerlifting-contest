import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <Image
        src="/globe-outline-dark-2.svg"
        alt="Background"
        layout="fill"
        objectFit="cover"

        quality={100}
        className="-z-10 opacity-20 blur-sm"
      />

      <p className="text-8xl font-bold text-white drop-shadow-xl">
        E-JUST Powerlifting Contest
      </p>
    </div>
  );
}
