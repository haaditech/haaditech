"use client";
import { useState } from "react";
import Image from "next/image";

export default function CommonHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home"); // Track active nav item

   const setDrawerState = (val) => {
    setIsOpen(val); // Close drawer after navigation (on mobile)
    document.getElementById('home').style.opacity=val?0.1:1
  };

  // Function to scroll to a section by ID
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActive(id);
    setDrawerState(false); // Close drawer after navigation (on mobile)
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "services", label: "Services" },
    { id: "price", label: "Price" },
  ];

  return (
    <header className="bg-gray-100 sticky top-0 z-50 border-b border-gray-200 opacity-90 rounded-t-xl">
      <nav
        className="flex items-center justify-between px-6 py-4"
        aria-label="Global"
      >
        {/* Left Logos */}
        <div className="flex items-start">
          <Image
            className="h-12 w-auto"
            priority
            src="/haditechlogo.svg"
            alt="Logo of Haadi Tech"
          />
          <Image
            className="h-12 w-auto ml-4 pt-1"
            priority
            src="/Name_Tag_Combined.svg"
            alt="Tagline Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-bold text-xl cursor-pointer ${active === item.id
                ? "border-b-2 border-[#004a8f] text-[#004a8f]"
                : "text-[#004a8f] hover:text-[#003366]"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        {/* Contact Us Button (Always visible on desktop, optional on mobile) */} 
        <div className="hidden md:block"> 
          {/* <button className="font-bold bg-[#004a8f] hover:bg-[#003366] text-white px-6 py-2 rounded-2xl text-lg"> Contact Us </button> */} 
          </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          {isOpen ? <button onClick={() => setDrawerState(false)}>
            <i className="mdi mdi-close text-4xl text-[#004a8f]"></i>
          </button> :

            <button
              type="button"
              aria-label="Open Menu"
              onClick={() => setDrawerState(true)}
            >
              <i className="mdi mdi-menu text-4xl text-[#004a8f] w-8 h-8" />
            </button>}
        </div>
      </nav>


      {/* Mobile Drawer */}
      <div
        className={`fixed top-20 right-0 h-full w-80 bg-[#004a8f] bg-opacity-1 shadow-lg z-50 
    transform transition-transform duration-300 
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer Navigation */}
        <nav className="flex flex-col items-start space-y-6 p-6 text-lg font-bold text-white">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-2xl text-left ${active === item.id
                  ? "border-b-2 border-white text-white"
                  : "hover:text-[#003366]"
                }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social Links */}
        <div className="fixed bottom-18 w-full flex flex-col items-start border-t-2 border-b-2 bg-white space-y-6 p-6 text-lg font-bold">
          <span className="text-[#004a8f]">Social Links</span>
          <div className="grid grid-cols-4">
            <div className="p-6 text-center">
              <a href="https://www.facebook.com/haaditechpvtltd/" target="_blank">
                <i className="mdi mdi-facebook text-5xl text-[#0866ff]"></i>
              </a>
            </div>
            <div className="p-6 text-center">
              <a href="https://www.linkedin.com/in/haaditech/" target="_blank">
                <i className="mdi mdi-linkedin text-5xl text-[#0073b2]"></i>
              </a>
            </div>
            <div className="p-6 text-center">
              <a href="https://www.instagram.com/haaditech.pvt.ltd/" target="_blank">
                <i className="mdi mdi-instagram text-5xl text-[#fe1984]"></i>
              </a>
            </div>
            <div className="p-6 text-center">
              <a href="#" target="_blank">
                <i className="mdi mdi-whatsapp text-5xl text-[#25d366]"></i>
              </a>
            </div>
          </div>


        </div>
      </div>
    </header>
  );
}
