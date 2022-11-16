import clsx from "clsx";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, {
  createRef,
  RefObject,
  useEffect,
  useRef,
} from "react";
import styles from "../../styles/Home.module.css";
import services from "../../utils/services";

gsap.registerPlugin(ScrollTrigger);

const HomeServices: React.FC = () => {

  let customPointer: HTMLElement | null = null;

  const serviceCardRefs = useRef(
    services.map((service) => createRef() as RefObject<HTMLDivElement>)
  );

  useEffect(() => {
    customPointer = document.getElementById('customPointer');

    serviceCardRefs.current.forEach((element, i) => {
      const el = element.current;
      gsap.fromTo(
        el,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power1",
          delay: i * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
          },
        }
      );
    });
  }, []);

  const handleMove = (e: any) => {  
    
    customPointer?.children[0].classList.remove('hidden');
    gsap.to(customPointer, {
      scale: 4,
      background: '#f97316',
      duration: 0.5,
    });
};
  const handleLeave = (e: any) => {
    customPointer?.children[0].classList.add('hidden');
    gsap.to(customPointer, {
      scale: 1,
      background: '#0284c7',
      duration: 0.5,
    });
  };
  

  return (
    <section id="services" className="homeSection">
      <div className="flex flex-col items-center pt-28 lg:p-10 p-5 relative bg-primary">
        
        <h1 className="text-5xl text-gray-100 font-bold underline underline-offset-8 decoration-orange-600 leading-relaxed">
          Our Software development services
        </h1>
        <div className="pt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center duration-500">
          {services.map((service, i) => (
            <div
              ref={serviceCardRefs.current[i]}
              key={`${service.title}${i}`}
              className={clsx(
                "md:p-5 flex flex-col items-start space-y-3 mb-16 justify-around",
                styles.homeServicesCard
              )}
            >
              <div onMouseMove={handleMove} onMouseLeave={handleLeave} className="bg-orange-600">
                <div className="relative cursor-none max-w-60 overflow-hidden hover:translate-x-2 hover:-translate-y-2 before:block before:absolute before:-inset-1 before:bg-black before:opacity-50 duration-500">
                  <div className="absolute p-5">
                    <h1 className="text-white text-2xl font-extrabold w-32">
                      {service.title}
                    </h1>
                  </div>
                  <img
                    className=""
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
