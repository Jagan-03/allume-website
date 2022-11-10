import clsx from "clsx";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { createRef, RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "../../styles/Home.module.css";
import services from "../../utils/services";

gsap.registerPlugin(ScrollTrigger);

const HomeServices: React.FC = () => {
    
    const [activeCard, setActiveCard] = useState<string>('');
    const serviceCardRefs = useRef(services.map(service => createRef() as RefObject<HTMLDivElement>));

    useEffect(() => {
        serviceCardRefs.current.forEach((element, i) => {
            const el = element.current;
            gsap.fromTo(el, {
              y: 100,
              opacity: 0
            }, {
                y: 0,
            opacity: 1,
              duration: 1,
              ease: "power1",
              delay: i * 0.2,
              scrollTrigger: {
                trigger: el,
              }
            });            
        });
      }, []);

  return (
    <section id="services" className="homeSection">
      <div className="flex flex-col items-center py-36 p-10">
        <h1 className="text-5xl">Our Software development services</h1>
        <div className="py-20 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 place-items-center duration-500">
          {services.map((service, i) => (
            <div 
                ref={serviceCardRefs.current[i]} key={`${service.title}${i}`} className={clsx("p-5 flex flex-col items-start space-y-3 mb-16 justify-around", styles.homeServicesCard)}>
                <div
                    onMouseOver={() => setActiveCard(`${service.title}${i}`)}
                    onMouseLeave={() => setActiveCard('')}
                    className="cursor-pointer">
                    <img
                        className="duration-500"
                        src={service.image}
                        alt={service.title}
                        width={300}
                        height={300}
                    />
                  </div>
                <h1 className="text-sky-700 text-2xl">{service.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
