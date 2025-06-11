
//import React from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import EmailSignup from '@/components/EmailSignup';
import FeaturePreview from '@/components/FeaturePreview';
import { Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
        {/* Main content */}

        <div className="text-center mb-16">
          <div className="inline-flex items-center  rounded-full text-sm text-primary mb-8 animate-fade-in">
            <img src="../finalone.png" width="200px" ></img>

          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in gradient-text">
            Coming Soon
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in leading-relaxed">
            We're crafting an extraordinary experience that will revolutionize the way you work.
            Get ready for something truly special.
          </p>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Feature Preview */}
        <FeaturePreview />

        {/* Email Signup */}
        <EmailSignup />

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-muted-foreground">
            © 2025 Haaditech. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
