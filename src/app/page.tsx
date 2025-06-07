"use client";
import React, { useEffect, useState } from "react";
type CountdownItemProps = {
  value: number;
  label: string;
};
export default function Home() {
  const calculateTimeLeft = () => {
    const countDownDate = new Date("June 30, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <>

      <section className="h-screen bg-gray-800 py-20">
        <div className="grid grid-flow-col md:grid-flow-row ...">
          <h1>Haaditech</h1>
        </div>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl lg:text-5xl text-white font-bold mb-8">
            Our Website is Coming Soon
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-12">
            Stay tuned for updates and get ready for an extraordinary experience!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 p-2">
            <CountdownItem value={days} label="days" />
            <CountdownItem value={hours} label="hours" />
            <CountdownItem value={minutes} label="minutes" />
            <CountdownItem value={seconds} label="seconds" />
          </div>
        </div>
      </section>
    </>
  );
}

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-white rounded-full px-6 py-2 min-w-[120px]">
      <div className="font-bold text-xl text-gray-800">{value}</div>
      <div className="text-xs uppercase text-gray-500">{label}</div>
    </div>
  );
}

