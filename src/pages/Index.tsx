
import React from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import EmailSubscription from '@/components/EmailSubscription';
import SocialLinks from '@/components/SocialLinks';
import { Rocket, Star, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-coming-soon relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 -right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 animate-pulse-slow">
              <Rocket size={64} className="text-white" />
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Haaditech
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Is Coming
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              We're crafting an extraordinary experience that will transform the way you work and play.
              Get ready for something revolutionary.
            </p>
          </div>

          {/* Features preview */}
          <div className="flex flex-wrap justify-center gap-6 my-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white/90">Premium Experience</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="text-white/90">Lightning Fast</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Rocket className="w-5 h-5 text-purple-400" />
              <span className="text-white/90">Next Generation</span>
            </div>
          </div>

          {/* Countdown timer */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Launch Countdown
            </h2>
            <CountdownTimer />
          </div>

          {/* Email subscription */}
          <div className="space-y-6 pt-8">
            <h3 className="text-xl font-medium text-white">
              Be the first to experience the future
            </h3>
            <EmailSubscription />
          </div>

          {/* Social links */}
          <div className="pt-12">
            <p className="text-white/60 mb-6">Follow us for updates</p>
            <SocialLinks />
          </div>

          {/* Footer */}
          <div className="pt-16 text-white/50 text-sm">
            <p>&copy; 2025 Haaditech. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
