import clsx from "clsx";
import React, { createRef, RefObject, useEffect, useRef } from "react";
import technicalBenefits from "../../utils/technicalBenefits";
import styles from "../../styles/Home.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeTechnicalBenefits: React.FC = () => {

    const benefitCardRefs = useRef(technicalBenefits.map(benefit => createRef() as RefObject<HTMLDivElement>));

    useEffect(() => {
      benefitCardRefs.current.forEach((element, i) => {
        const el = element.current;
        gsap.fromTo(
          el,
          {
            scale: 0,
          },
          {
            scale: 1,
            duration: 0.5,
            ease: "power1",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
            },
          }
        );
      });
    }, []);

  return (
    <section id="services" className="homeSection">
      <div className="flex flex-col items-center py-10 px-5 bg-primary">
        <h1 className="text-5xl underline underline-offset-8 decoration-orange-600 leading-relaxed text-gray-200 font-bold">Technical Benefits We Bring</h1>
        <div className="py-20 grid w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center duration-500">
          {technicalBenefits.map((benefit, i) => (
            <div 
                ref={benefitCardRefs.current[i]} 
                key={`${benefit.title}${i}`} 
                className={clsx("w-full scale-0 mb-5 md:p-10 flex flex-col items-start space-y-3 justify-around", styles.homeServicesCard)}>
                <div className="flex flex-col justify-start items-center p-5 h-full w-full">
                  {/* <benefit.icon width={100} color="white"/> */}
                  <h1 className="text-xl text-center mb-5 underline text-white font-semibold">
                    {benefit.title}
                  </h1>
                  <p className="text-white text-center">
                    {benefit.description}
                  </p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeTechnicalBenefits;
