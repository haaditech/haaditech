'use client';
import { useState, useEffect } from 'react';

const images = [
  '/assets/img/cr1.jpg',
  '/assets/img/cr2.jpg',
  '/assets/img/cr-3.jpg',
];
export default function CommonCrousel() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="relative w-full  mx-auto overflow-hidden py-8">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
                {images.map((src, i) => (
                    <img key={i} src={src} className="w-full rounded-3xl flex-shrink-0 object-cover" alt={`Slide ${i + 1}`} />
                ))}
            </div>

            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black/70"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black/70"
            >
                &#10095;
            </button>
        </div>
    );
}
