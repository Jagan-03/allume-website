import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { createRef, RefObject, useEffect, useRef, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";


gsap.registerPlugin(ScrollToPlugin);
const HomeClientTestimonials: React.FC = () => {

    let currentSlide = 0;
    const slidesRef = useRef([...Array(5)].map(slides => createRef() as RefObject<HTMLDivElement>));

    useEffect(() => {
        window.addEventListener('resize', changeNewSlide);

        return () => window.removeEventListener('resize', changeNewSlide);
    }, []);

    const prev = () => {
        if(currentSlide < 1) return;
        updateCurrentSlide();
        currentSlide--;
        changeNewSlide();
    }

    const next = () => {
        if(currentSlide >= 4) return;
        updateCurrentSlide();
        currentSlide++;
        changeNewSlide();
    }

    const updateCurrentSlide = () => {
        slidesRef.current[currentSlide].current?.children[0].classList.add('scale-50');
    }

    const changeNewSlide = () => {
        gsap.to('#homeCarousel', {
            duration: 0.5,
            scrollTo: slidesRef.current[currentSlide].current as Element,
        });
        slidesRef.current[currentSlide].current?.children[0].classList.remove('scale-50');
    }

  return (
    <section id="homeTestimonials">  
        <div className="bg-primary">
            <h1 className="text-center text-gray-100 md:text-5xl text-4xl py-16 underline underline-offset-8 font-bold decoration-orange-600 leading-relaxed">Success Stories To Inspire</h1>
        <div className="w-full flex justify-center relative md:pb-24 sm:pb-16 pb-6">
            <div className="z-9 absolute ld:w-3/4 md:w-4/5 md:px-0 px-3 w-full h-96 flex items-center justify-between">
                <div onClick={prev} className="cursor-pointer w-10 h-10 lg:border lg:pl-5 hover:p-0 hover:border-none lg:hover:bg-orange-600 duration-500">
                    <ArrowLeftIcon color="white" className="w-10"/>
                </div>
                <div onClick={next} className="cursor-pointer w-10 h-10 lg:border lg:pl-5 rotate-180 hover:p-0 hover:border-none lg:hover:bg-orange-600 duration-500">
                    <ArrowLeftIcon color="white" className="w-10"/>
                </div>
            </div>
            <div id="homeCarousel" className="z-10 flex w-3/5 h-96 flex-nowrap overflow-x-hidden">
                {
                    [...Array(5)].map((slide, i) => (
                        <div key={i} className="min-w-full" ref={slidesRef.current[i]}>
                            <div className="flex lg:flex-row flex-col w-full h-full transition-transform duration-100">
                                <div className="flex lg:flex-col space-y-5 space-x-5 items-center lg:pt-10">
                                    <Image 
                                        className="rounded-full border-4 lg:w-48 md:w-40 sm:w-32 xs:w-28 w-20"
                                        src="/testimonials/client-1.jpg"
                                        alt="Elon"
                                        width={200}
                                        height={200}
                                        />
                                    <div className="">
                                        <h1 className="text-white text-xl font-bold">Elon Musk</h1>
                                        <h3 className="text-gray-300">Tesla</h3>
                                        <h3 className="text-gray-300">Co-founder & CEO</h3>
                                    </div>
                                </div>
                                <div className="flex-1 h-full lg:p-10 py-5">
                                    <div className="bg-orange-600">
                                        <div className="bg-white translate-x-2 -translate-y-2 lg:h-full lg:max-h-max max-h-52 p-5 overflow-auto">
                                            <p className="lg:text-lg md:text-md text-sm">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempore enim a, magni, mollitia sint, ipsam ad culpa aliquid eius consequatur. Iste eaque molestias provident earum hic minima dicta dolor.
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempore enim a, magni, mollitia sint, ipsam ad culpa aliquid eius consequatur. Iste eaque molestias provident earum hic minima dicta dolor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
                </div>
    </section>
  );
};

export default HomeClientTestimonials;
