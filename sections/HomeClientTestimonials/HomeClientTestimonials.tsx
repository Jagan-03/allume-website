import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { createRef, RefObject, useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollToPlugin);

const HomeClientTestimonials: React.FC = () => {

    let currentSlide = 0;
    const slidesRef = useRef([...Array(5)].map(slides => createRef() as RefObject<HTMLDivElement>));

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
        gsap.to('#carousel', {
            duration: 0.5,
            scrollTo: slidesRef.current[currentSlide].current as Element,
        });
        slidesRef.current[currentSlide].current?.children[0].classList.remove('scale-50');
    }

  return (
    <section id="homeTestimonials">  
    <div className="w-full h-96 flex justify-center relative">
        <div className="absolute w-full h-full flex items-center justify-between px-5">
            <span onClick={prev} className="text-8xl">{'<'}</span>
            <span onClick={next} className="text-8xl">{'>'}</span>
        </div>
        <div id="carousel" className="flex w-3/5 flex-nowrap overflow-x-auto">
            {
                [...Array(5)].map((slide, i) => (
                    <div key={i} className="min-w-full" ref={slidesRef.current[i]}>
                        <div className="w-full bg-red-500 h-full transition-transform duration-100">{i}</div>
                    </div>
                ))
            }
        </div>
    </div>
    </section>
  );
};

export default HomeClientTestimonials;
