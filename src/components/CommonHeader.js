import Image from 'next/image';
import HadiTechLogo from "./../../public/haditechlogo.svg"
import TagLogo from "./../../public/Name_Tag_Combined.svg"

export default function MainPage() {
  return (
    <header className="bg-gray-50 sticky top-0 z-50">
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-10 w-auto"
              priority
              src={HadiTechLogo}
              alt="Logo of Haadi Tech"
            />
          </a>
          {/* <h4 className="ml-3 text-base/7 font-semibold text-[#004a8f] sm:text-1xl">THINK THE UNTHINKABLE</h4> */}
          <Image className="h-10 w-auto ml-4 pt-1"
            priority
            src={TagLogo}
            alt="Logo of Haadi Tech"
          />
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            {/* <span className="sr-only">Open main menu</span>
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg> */}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button type="button" className="flex items-center gap-x-1 text-sm/8 font-bold text-[#004a8f]" aria-expanded="false">
              Home
            </button>

          </div>

          <a href="#" className="text-sm/8 font-bold text-[#004a8f]">Features</a>
          <a href="#" className="text-sm/8 font-bold text-[#004a8f]">Products</a>
          <a href="#" className="text-sm/8 font-bold text-[#004a8f]">Company</a>
        </div>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
        </div> */}
      </nav>
    </header>
  );
}
