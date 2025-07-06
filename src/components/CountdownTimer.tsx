
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Set launch date to 30 days from now (you can customize this)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: 58 },
//     { label: 'Hours', value: timeLeft.hours },
//     { label: 'Minutes', value: timeLeft.minutes },
//     { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 min-w-[80px] animate-bounce-gentle"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="text-3xl md:text-4xl font-bold text-white mb-1">
            {unit.value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-white/80 uppercase tracking-wider">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
