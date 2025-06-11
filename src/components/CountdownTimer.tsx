
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to 30 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

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
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-card/20 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 text-center animate-pulse-glow">
      <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-sm sm:text-base text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center mb-12">
      <div className="w-full max-w-2xl">
        <div className="flex items-center justify-center mb-6">
          <Clock className="w-6 h-6 text-primary mr-2" />
          <span className="text-lg text-muted-foreground">Launch Countdown</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
