
import React from 'react';
import { Rocket, Zap, Shield, Star } from 'lucide-react';

const FeaturePreview = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Lightning Fast',
      description: 'Built for speed and performance'
    },
    {
      icon: Zap,
      title: 'Powerful Features',
      description: 'Everything you need and more'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Your data is safe with us'
    },
    {
      icon: Star,
      title: 'Premium Experience',
      description: 'Designed with you in mind'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-card/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-card/30 transition-all duration-300 animate-fade-in hover:scale-105"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-4 animate-float">
            <feature.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturePreview;
