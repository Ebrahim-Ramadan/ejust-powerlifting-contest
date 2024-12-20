'use client'

import Link from "next/link";
import { Calendar, Github, MapPin, Users } from 'lucide-react';
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <div className="relative min-h-screen  ">
      <img
        src="/home bg.jpeg"
        alt="Background"
        style={{ objectFit: "cover" }}
        className="fixed inset-0 z-0 w-full h-full blur-lg"
      />

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-7xl  text-white drop-shadow-xl font-bold mb-4">
            <span className="ejust-word text-5xl md:text-8xl">E-JUST</span> Powerlifting <span className="text-[#EB2028]">Championship</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-8 font-medium">
            Unleash Your Strength at the 2024 Tournament
          </p>
          <Link href="https://forms.gle/CP1rVgGLSjpybWK49">
            <button className="bg-[#EB2028] hover:bg-[#C41017] text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Register Now
            </button>
          </Link>
        </header>
<Countdown/>
        <section className="rounded-lg backdrop-blur-sm p-2 mb-16 w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            <div className="flex items-center justify-start w-full p-4">
              <Calendar className="w-10 h-10 mr-6 text-[#EB2028]" />
              <div>
                <h3 className="font-semibold text-neutral-100 text-lg">Date</h3>
                <p className="text-neutral-300">December 24, 2024</p>
              </div>
            </div>
            <div className="flex items-center justify-start w-full p-4">
              <MapPin className="w-10 h-10 mr-6 text-[#EB2028]" />
              <div>
                <h3 className="font-semibold text-neutral-100 text-lg">Venue</h3>
                <p className="text-neutral-300">The Solar Panels</p>
              </div>
            </div>
            <div className="flex items-center justify-start w-full p-4">
              <Users className="w-10 h-10 mr-6 text-[#EB2028]" />
              <div>
                <h3 className="font-semibold text-neutral-100 text-lg">Eligibility</h3>
                <p className="text-neutral-300">Open to all University students</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-lg backdrop-blur-sm p-4 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Tournament Rules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-neutral-200">Deadlift</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>Conventional or sumo stance allowed</li>
                <li>Overhand, mixed, or hook grip permitted</li>
                <li>Continuous motion without downward movement</li>
                <li>Full lockout required at the top</li>
                <li>No hitching or resting on thighs</li>
                <li>Bar must be lowered under control</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-neutral-200">Bench Press</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>Start from full arm extension</li>
                <li>Bar must touch chest and be pressed back to full extension</li>
                <li>Follow judge&apos;s commands: Start, Press, Rack</li>
                <li>Buttocks must maintain contact with the bench</li>
                <li>Feet must remain flat on the floor</li>
                <li>No bouncing or downward movement after press starts</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center mb-4 flex flex-col items-center justify-center gap-6">
          <h2 className="text-3xl font-bold text-white">READY TO LIFT?</h2>
         <div className="relative w-full h-[50vh] md:h-auto flex ">
         <img
          src="/head-championships-2022.jpg"
          alt="Head Championships 2022"
          className="blur-sm object-cover w-full h-full"
          />
          <p className="flex flex-col md:flex-row absolute inset-0 flex items-center justify-center text-[#EB2028] text-center text-6xl md:text-5xl font-bold">
<span className="text-neutral-800/90 md:mr-2">NEVER</span> MISS OUT
          </p>
         </div>
          <Link href="https://forms.gle/CP1rVgGLSjpybWK49">
            <button className="bg-[#EB2028] hover:bg-[#C41017] text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Register Now
            </button>
          </Link>
        </section>

        <footer className="flex flex-row items-center justify-center py-12">
          <a className="flex justify-center bg-neutral-700 hover:bg-neutral-600 text-white font-bold p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105" href="https://github.com/Ebrahim-Ramadan/ejust-powerlifting-tournament">
          <Github/>
          </a>
        </footer>
      </div>

    </div>
  );
}

