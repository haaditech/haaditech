"use client";
import Image from 'next/image';
import HadiTechLogo from "./../../public/haditechlogo.svg"
import CommonHeader from '@/components/CommonHeader'
import { useEffect } from "react";
export default function MainPage() {
    useEffect(() => {
        const button = document.getElementById("scroll-down-btn");

        const handleScroll = () => {
            if (window.scrollY > 100) {
                button?.classList.add("opacity-0", "pointer-events-none");
            } else {
                button?.classList.remove("opacity-0", "pointer-events-none");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    // Function to scroll to a section by ID
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className='container'>
            <CommonHeader />

            <div className='items-center justify-center min-h-screen ' id="home">

                <div
                    className="relative md:h-[480] sm:h-[200px] bg-[#004a8f]  bg-center flex text-black animate-wiggle"

                >
                    {/* Overlay (optional)style={{
                        backgroundImage: "url('/assets/img/main-bg-1.jpeg')", // put image in public/assets

                    }} */}
                    <div className="relative z-10 text-center text-white flex flex-col w-full items-center px-20 py-50 animate-slide-up">
                        <div className="flex-1">
                            <h2 className="text-4xl lg:text-6xl font-bold">Digital Solutions</h2>
                        </div>
                        <div>
                            <p className="mt-4 text-2xl mx-auto">
                                We design and build fast, secure, and scalable websites and mobile applications tailored to your business goals.
                            </p>
                        </div>
                    </div>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-40" id="work">

                        <button id="scroll-down-btn"  onClick={() => scrollToSection('work')} type="button" className="animate-bounce cursor-pointer flex items-center gap-x-1 font-bold bg-gray-300  text-[#004a8f] w-15 h-15 rounded-4xl  text-center justify-center text-lg" aria-expanded="false">
                            <i className="mdi mdi-arrow-down text-4xl"></i>
                        </button>
                    </div>

                    {/* Animated Text Content */}
                    {/* <div className="relative z-10 text-left px-4 py-90 w-100 animate-slide-up">
                        <h2 className="text-4xl md:text-5xl font-bold">Digital Solutions</h2>
                        <p className="mt-4 text-md mx-auto">
                           We design and build fast, secure, and scalable websites and mobile applications tailored to your business goals.
                        </p>
                    </div> */}
                </div>
                <div className="bg-gray-50 pb-5 rounded-top-xl " data-aos="fade-up"
                    data-aos-delay="200">
                    <div className="mx-10 text-center" >

                        {/* <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">A better workflow</p> */}
                        <h2 className="pt-3 md:text-4xl sm:text-3xl text-[#004a8f]">We are a leading software development company dedicated to helping businesses and individuals bring their ideas to life through innovative digital solutions.</h2>


                    </div>
                    <dl className="mt-10 mx-10 max-w-2xl md:flex md:justify-center space-y-8 text-base/7 text-gray-600 text-center lg:max-w-none pa-5 opacity-[0.9]">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:[grid-rows-4] pb-5 gap-4 flex justify-center">
                            <div className="bg-white border border-gray-300 rounded-xl shadow-md w-64 p-6 text-center hover:shadow-xl hover:bg-[#ffffff] transition-transform duration-300 hover:scale-105">
                                <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-account-group top-0 left-1 text-5xl text-[#004a8f]"></i>
                                </span>

                                <h3 className="text-xl font-semibold text-gray-800 mb-2">User Experince</h3>
                                <p className="text-gray-600 text-sm">Whether you're launching a startup, modernizing an existing platform, or building a cross-platform mobile application, our expert team is here to turn your vision into reality.</p>
                            </div>
                            <div className="bg-white border border-gray-300 rounded-xl shadow-md w-64 p-6 text-center hover:shadow-xl hover:bg-[#ffffff] transition-transform duration-300 hover:scale-105">
                                <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-monitor-cellphone-star top-0 left-1 text-5xl text-[#004a8f]"></i>
                                </span>

                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Development</h3>
                                <p className="text-gray-600 text-sm">Our core services include custom website development and the creation of powerful web applications tailored for Android, iOS, and web platforms.</p>
                            </div>
                            <div className="bg-white border border-gray-300 rounded-xl shadow-md w-64 p-6 text-center hover:shadow-xl hover:bg-[#ffffff] transition-transform duration-300 hover:scale-105">
                                <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-finance top-0 left-1 text-5xl text-[#004a8f]"></i>
                                </span>

                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Scalability</h3>
                                <p className="text-gray-600 text-sm">With a strong focus on performance, scalability, and user experience, we deliver end-to-end solutions that are both visually compelling and functionally robust.</p>
                            </div>
                            <div id="services" className="bg-white border border-gray-300 rounded-xl shadow-md w-64 p-6 text-center hover:shadow-xl hover:bg-[#ffffff] transition-transform duration-300 hover:scale-105">
                                <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-account-lock-outline  top-0 left-1 text-5xl text-[#004a8f]"></i>
                                </span>

                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Security</h3>
                                <p className="text-gray-600 text-sm">Our platform ensures enterprise-grade security tailored to the needs of business users. We prioritize data protection and privacy, giving our business users the security they need to operate with confidence.</p>
                            </div>

                        </div>
                    </dl>
                </div>

                <div className="bg-gray-100 pb-5" data-aos="fade-up"
                    data-aos-delay="200"  >
                    <div className="md:mx-10 text-center">
                        <h1 className="pt-3 text-2xl lg:text-4xl sm:text-2xl text-[#004a8f] border-b-2 pb-2 border-[#004a8f] font-semibold">Our Services</h1>
                    </div>
                    <dl className="mt-10 mx-10 max-w-2xl md:flex md:justify-center space-y-8 text-base/7 text-gray-600 text-center lg:max-w-none pa-5 opacity-[0.9]">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:[grid-rows-4] gap-4 flex justify-center lg:justify-start pb-5">
                            <div className="bg-white border border-gray-300 rounded-xl shadow-md w-64 p-6 text-center hover:shadow-xl hover:bg-[#ffffff] transition-transform duration-300 hover:scale-105">
                                <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-web top-0 left-1 text-6xl text-[#004a8f]"></i>
                                </span>

                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Web Development</h3>
                            </div>
                            <div className="bg-white border border-gray-300 rounded-xl shadow-md w-64 p-6 text-center hover:shadow-xl hover:bg-[#ffffff] transition-transform duration-300 hover:scale-105">
                                <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-cellphone top-0 left-1 text-6xl text-[#004a8f]"></i>
                                </span>

                                <h3 className="text-xl font-semibold text-gray-800 mb-2">App Development</h3>
                            </div>
                            <div className="bg-white border border-gray-300 rounded-xl shadow-md w-64 p-6 text-center hover:shadow-xl hover:bg-[#ffffff] transition-transform duration-300 hover:scale-105">
                                <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-speedometer top-0 left-1 text-6xl text-[#004a8f]"></i>
                                </span>

                                <h3 className="text-xl font-semibold text-gray-800 mb-2">SEO</h3>
                            </div>
                            <div className="bg-white border border-gray-300 rounded-xl shadow-md w-64 p-6 text-center hover:shadow-xl hover:bg-[#ffffff] transition-transform duration-300 hover:scale-105">
                                <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-account-box-outline  top-0 left-1 text-6xl text-[#004a8f]"></i>
                                </span>

                                <h3 className="text-xl font-semibold text-gray-800 mb-2">IT Consultancy</h3>
                            </div>

                        </div>
                    </dl>
                    <div className="md:mx-10 text-center">
                        <h1 className="pt-3 text-2xl lg:text-4xl sm:text-2xl text-[#004a8f] border-b-2 pb-2 border-[#004a8f] font-semibold">Our Tech-Stack</h1>
                    </div>
                    <dl className="mt-10 mx-10 max-w-2xl md:flex md:justify-center space-y-8 text-base/7 text-gray-600 flex justify-center lg:justify-start lg:max-w-none pa-5 opacity-[0.9]">
                        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:[grid-rows-4] gap-6 pb-5">
                            <div className="bg-white border border-gray-300 rounded-xl shadow-md w-80 p-6 hover:shadow-xl hover:bg-[#ffffff] transition-transform duration-300 hover:scale-105">
                                <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-cellphone top-0 text-6xl text-[#004a8f]"></i>
                                </span>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">App Development</h3>
                                <ul className="space-y-2">
                                    <li className="flex">
                                        <span className="text-[#004a8f]"><i className="mdi mdi-check text-2xl"></i></span>
                                        React Native
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white border border-gray-300 rounded-xl shadow-md w-80 p-6 hover:shadow-xl hover:bg-[#ffffff] transition-transform duration-300 hover:scale-105">
                                <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-web top-0 left-1 text-6xl text-[#004a8f]"></i>
                                </span>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Website Development</h3>
                                <ul className="space-y-2">
                                    <li className="flex">
                                        <span className="text-[#004a8f]"><i className="mdi mdi-check text-2xl"></i></span>
                                        Angular Js
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#004a8f]"><i className="mdi mdi-check text-2xl"></i></span>
                                        React Js
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#004a8f]"><i className="mdi mdi-check text-2xl"></i></span>
                                        Vue Js
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#004a8f]"><i className="mdi mdi-check text-2xl"></i></span>
                                        PHP (Wordpress,Laravel)
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </dl>
                </div>
                {/* <section className="w-full bg-gray-50 py-16 px-6" data-aos="fade-up"
                    data-aos-delay="200">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">

                        <div className="md:w-1/2">
                            <p className="font-bold text-[#004a8f]">Clients</p>
                            <h2 className="text-gray-600 mt-2 text-4xl ">What people say about us?</h2>

                            {/* <div className="flex mt-8 space-x-4">
                                <button className="w-10 h-10 rounded-full bg-[#004a8f] text-white flex items-center justify-center hover:bg-[#00306a] transition">
                                    ‹
                                </button>
                                <button className="w-10 h-10 rounded-full bg-[#004a8f] text-white flex items-center justify-center hover:bg-[#00306a] transition">
                                    ›
                                </button>
                            </div> 
                        </div>
                        <div className="md:w-1/2">
                            <CommonCrousel />
                        </div>
                    </div>
                </section>*/}
                <div className="bg-gray-50 pb-5" data-aos="fade-up"
                    data-aos-delay="200" id="price">
                    <div className="md:mx-10 text-center">
                        <h1 className="pt-3 text-2xl lg:text-4xl sm:text-2xl text-[#004a8f] border-b-2 pb-2 border-[#004a8f] font-semibold" >Our Prices</h1>
                    </div>
                    <dl className="mt-10 mx-10 max-w-2xl md:flex md:justify-center space-y-8 text-base/7 text-gray-600 flex justify-center lg:justify-start lg:max-w-none pa-5 opacity-[0.9]">

                        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:[grid-rows-4] gap-6 pb-5">
                            <div className="bg-white border border-gray-300 rounded-xl shadow-md w-80 p-6 hover:shadow-xl hover:bg-[#ffffff] transition-transform duration-300 hover:scale-105">
                                <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-speedometer top-0 text-6xl text-[#004a8f]"></i>
                                </span>

                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Website SEO</h3>
                                <ul className="space-y-2">
                                    <li className="flex">
                                        <span className="text-[#004a8f]"><i className="mdi mdi-check text-2xl"></i></span>
                                        Basic SEO: $250</li>
                                    <li className="flex">
                                        <span className="text-[#004a8f]"><i className="mdi mdi-check text-2xl"></i></span>
                                        Standard SEO: $500</li>
                                    <li className="flex">
                                        <span className="text-[#004a8f]"><i className="mdi mdi-check text-2xl"></i></span>
                                        Advanced SEO: $700</li>

                                </ul>

                            </div>

                            <div className="bg-white border border-gray-300 rounded-xl shadow-md w-80 p-6 hover:shadow-xl hover:bg-[#ffffff] transition-transform duration-300 hover:scale-105">
                                <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-web top-0 left-1 text-6xl text-[#004a8f]"></i>
                                </span>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Website Development</h3>
                                <ul className="space-y-2">
                                    <li className="flex">
                                        <span className="text-[#004a8f]"><i className="mdi mdi-check text-2xl"></i></span>
                                        Upto 5 Pages  $399/Month
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#004a8f]"><i className="mdi mdi-check text-2xl"></i></span>
                                        Upto 15 Pages $1399/Month
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#004a8f]"><i className="mdi mdi-check text-2xl"></i></span>
                                        Upto 25 Pages $1899/Month
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#004a8f]"><i className="mdi mdi-check text-2xl"></i></span>
                                        Upto 35 Pages $4777/Month
                                    </li>
                                </ul>

                            </div>

                            <div className="bg-white border border-gray-300 rounded-xl shadow-md w-80 p-6 hover:shadow-xl hover:bg-[#ffffff] transition-transform duration-300 hover:scale-105">
                                <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-cellphone top-0 left-1 text-6xl text-[#004a8f]"></i>
                                </span>

                                <h3 className="text-xl font-semibold text-gray-800 mb-2">App Development</h3>
                                <ul className="space-y-2">
                                    <li className="flex">
                                        <span className="text-[#004a8f]"><i className="mdi mdi-check text-2xl"></i></span> Simple app (basic features, MVP): $5,000 – $8,000
                                    </li>
                                    <li className="flex">
                                        <span className="text-[#004a8f]"><i className="mdi mdi-check text-2xl"></i></span>Medium complexity app (chat, payments, dashboards): $8,000 – $15,000
                                    </li>
                                    <li className="flex">
                                        <span className="text-[#004a8f]"><i className="mdi mdi-check text-2xl"></i></span> Complex app (marketplace, real-time features, multi-platform): $15,000 – $30,000+
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </dl>
                </div>


                <footer className="bg-gray-100 bg-gray-100 border-t-1 rounded-b-xl border-[#004a8f] px-6 py-2">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 justify-center items-center">

                        <div className="md:w-1/2 py-5">
                            <div className="flex flex-cols-2 space-x-5">
                                <Image className="h-12 w-auto"
                                    priority
                                    src={HadiTechLogo}
                                    alt="Logo of Haadi Tech"
                                />
                                {/* <h4 className="ml-3 text-base/7 font-semibold text-[#004a8f] sm:text-1xl">THINK THE UNTHINKABLE</h4> */}
                                <div className=''>

                                    <p className="text-[#004a8f] font-medium">+91 1234554321</p>
                                    <p className="text-[#004a8f] font-normal">2025 © HaadiTech</p>
                                </div>
                            </div>
                            {/* <p className="text-[#004a8f]">2025 © HaadiTech</p> */}
                        </div>

                        <div className="hidden md:flex w-full justify-end grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="p-6 text-center col-span-0">
                                <a href="https://www.facebook.com/haaditechpvtltd/" target='_blank'>
                                    <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-facebook  top-0 left-1 text-5xl text-[#0866ff]"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="p-6 text-center">
                                <a href="https://www.linkedin.com/in/haaditech/" target='_blank'>
                                    <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-linkedin  top-0 left-1 text-5xl text-[#0073b2]"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="p-6 text-center">
                                <a href="https://www.instagram.com/haaditech.pvt.ltd/" target='_blank'>
                                    <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-instagram  top-0 left-1 text-5xl text-[#fe1984]"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="p-6 text-center">
                                <a href="#" target='_blank'>
                                    <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-whatsapp  top-0 left-1 text-5xl text-[#25d366]"></i>
                                    </span>
                                </a>
                            </div>
                        </div>

                    </div>
                </footer>
            </div>
        </div>
    );
}
