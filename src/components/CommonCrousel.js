'use client'

export default function CommonCrousel() {
    const testimonials = [
        { name: 'A & M', role: 'Director', text: 'Excellent experience.' },
    ]
    return (
        <div className="flex flex-cols-4">
            {testimonials.map((t, index) => (
                <section key={index} className="relative  overflow-hidden">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"></div>
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                    <div className="mx-auto ">
                        <img src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg" alt="" className="mx-auto h-12" />

                        <figure className="mt-10">
                            <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
                                </p> </blockquote>
                            <figcaption className="mt-10">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="mx-auto size-10 rounded-full" />
                                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                    <div className="font-semibold text-gray-900">{t.name}</div>
                                    <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                                        <circle r="1" cx="1" cy="1" />
                                    </svg>
                                    <div className="text-gray-600">{t.role}</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            ))}
        </div>

    )
};
