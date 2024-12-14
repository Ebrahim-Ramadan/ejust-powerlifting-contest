'use client';
import React, { useState, useEffect } from 'react';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const christmasDate = new Date('December 24, 2024 23:59:59');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = christmasDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderTimeUnit = (value: number, label: string) => (
    <div 
      className={`
        flex flex-col items-center p-4 md:p-16 rounded-lg shadow-lg 
     
      `}
    >
      <span className="text-6xl md:text-9xl font-bold">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-sm md:text-lg text-neutral-400 font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <div 
      className={`
        min-h-screen flex items-center justify-center p-24 
      `}
    >
      <div className="text-center">
       
        <div className="flex justify-center gap-2 md:gap-12 md:flex-row flex-col">
          {renderTimeUnit(timeLeft.days, 'DAYS')}
          {renderTimeUnit(timeLeft.hours, 'HOURS')}
          {renderTimeUnit(timeLeft.minutes, 'MINUTES')}
          {renderTimeUnit(timeLeft.seconds, 'SECONDS')}
        </div>
      </div>
    </div>
  );

};

export default Countdown;