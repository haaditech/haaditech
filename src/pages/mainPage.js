import CommonCrousel from '@/components/CommonCrousel';
import CommonHeader from '@/components/CommonHeader'
export default function MainPage() {
    return (
        <div>
            <CommonHeader />
            <div
                className="relative h-[600px] bg-cover bg-center flex text-white"
                style={{
                    backgroundImage: "url('/assets/img/main-bg-1.jpeg')", // put image in public/assets
                }}
            >
                {/* Overlay (optional) */}
                <div className="absolute inset-0"></div>

                {/* Animated Text Content */}
                <div className="relative z-10 text-left px-4 py-50 animate-slideDown">
                    <h2 className="text-4xl md:text-5xl font-bold">Digital Solutions</h2>
                    <p className="mt-4 text-md mx-auto">
                        We build modern websites and cross-platform apps for web, Android, and iOS.
                    </p>
                </div>
                <div className="relative z-10 text-center px-4 animate-slideDown">

                </div>
            </div>
            <div className="bg-white border border-[#004a8f] rounded-lg shadow mx-5 mt-5 pb-5">
                <div className="mx-auto text-center">

                    {/* <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">A better workflow</p> */}
                    <h2 className="mt-6 text-4xl text-[#004a8f]">We are a leading software development company dedicated to helping businesses and individuals bring their ideas to life through innovative digital solutions.</h2>


                </div>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 text-center lg:max-w-none pa-5">
                    <div className="grid grid-cols-4 ml-25">
                        <div className="bg-white border border-gray-300 rounded-xl shadow-md w-64 p-6 text-center">
                            <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-account-group top-0 left-1 text-5xl text-[#004a8f]"></i>
                            </span>

                            <h3 className="text-xl font-semibold text-gray-800 mb-2">User Experince</h3>
                            <p className="text-gray-600 text-sm">Whether you're launching a startup, modernizing an existing platform, or building a cross-platform mobile application, our expert team is here to turn your vision into reality.</p>
                        </div>
                        <div className="bg-white border border-gray-300 rounded-xl shadow-md w-64 p-6 text-center">
                            <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-monitor-cellphone-star top-0 left-1 text-5xl text-[#004a8f]"></i>
                            </span>

                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Development</h3>
                            <p className="text-gray-600 text-sm">Our core services include custom website development and the creation of powerful web applications tailored for Android, iOS, and web platforms.</p>
                        </div>
                        <div className="bg-white border border-gray-300 rounded-xl shadow-md w-64 p-6 text-center">
                            <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-finance top-0 left-1 text-5xl text-[#004a8f]"></i>
                            </span>

                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Scalability</h3>
                            <p className="text-gray-600 text-sm">With a strong focus on performance, scalability, and user experience, we deliver end-to-end solutions that are both visually compelling and functionally robust.</p>
                        </div>
                         <div className="bg-white border border-gray-300 rounded-xl shadow-md w-64 p-6 text-center">
                            <span className="material-icons text-red-500 text-5xl mb-4"><i className="mdi mdi-account-lock-outline  top-0 left-1 text-5xl text-[#004a8f]"></i>
                            </span>

                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Security</h3>
                            <p className="text-gray-600 text-sm">Our platform ensures enterprise-grade security tailored to the needs of business users. We prioritize data protection and privacy, giving our business users the security they need to operate with confidence.</p>
                        </div>

                    </div>




                </dl>
            </div>
        </div>
    );
}
