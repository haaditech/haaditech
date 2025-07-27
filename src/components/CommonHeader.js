import Image from 'next/image'
import HadiTechLogo from './../../public/haditechlogo.svg'
import TagLogo from './../../public/Name_Tag_Combined.svg'

export default function MainPage() {
  return (
    <header className="bg-gray-50 sticky top-0 z-50 border-b border-gray-200 opacity-90">
      <nav className="mx-5 flex items-center justify-between px-6 py-4" aria-label="Global">
        {/* Left Logos */}
        <div className="flex items-center space-x-1">
          <Image className="h-12 w-auto" priority src={HadiTechLogo} alt="Logo of Haadi Tech" />
          <Image className="h-12 w-auto ml-4 pt-1" priority src={TagLogo} alt="Tagline Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <button className="font-bold border-b-2 border-[#004a8f] text-[#004a8f] text-lg">Home</button>
          <button className="font-bold text-[#004a8f] text-lg">Work</button>
          <button className="font-bold text-[#004a8f] text-lg">Services</button>
          <button className="font-bold text-[#004a8f] text-lg">Clients</button>
        </div>

        {/* Contact Us Button (Always visible on desktop, optional on mobile) */}
        <div className="hidden md:block">
          <button className="font-bold bg-[#004a8f] hover:bg-[#003366] text-white px-6 py-2 rounded-2xl text-lg">
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger Menu (Only visible on mobile) */}
        <div className="md:hidden">
          <button type="button" aria-label="Open Menu">
            <i className="mdi mdi-menu text-4xl text-[#004a8f] w-8 h-8" />
          </button>
        </div>
      </nav>
    </header>
  )
}
