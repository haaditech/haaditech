
import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [

    { Icon: Facebook, href: 'https://www.facebook.com/haaditechnology/', label: 'Facebook' },
    { Icon: Instagram, href: 'https://www.instagram.com/haadi.tech/', label: 'Instagram' },

  ];

  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          aria-label={label}
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
