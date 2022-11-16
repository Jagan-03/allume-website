import gsap, { Power1 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { createRef, LegacyRef, RefObject, useEffect, useRef } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

gsap.registerPlugin(ScrollTrigger);

const HomeDesc: React.FC = () => {

  const count = { val: 0 };

  const homeDescStats = [
    {
      title: "Solutions",
      value: 50,
      symbol: "+"
    },
    {
      title: "Industries",
      value: 5,
      symbol: "+"
    },
    {
      title: "Client Satisfaction",
      value: 100,
      symbol: "%"
    },
    {
      title: "Reviews",
      value: 5,
      symbol: <StarIcon className="w-10"/>
    },
  ];

  const statsCont = createRef() as RefObject<HTMLDivElement>;
  const statsRef = useRef(homeDescStats.map(stat => createRef() as RefObject<HTMLDivElement>));

  useEffect(() => {
    gsap.fromTo(statsCont.current, {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: statsCont.current
      }
    });
    homeDescStats.forEach((stat, i) => {
      gsap.to(count, (stat.value / 100) + 1, {
        val: stat.value,
        roundProps: "val",
        scrollTrigger: {
          trigger: statsCont.current,
        },
        onUpdate: function () {
          const valueEl = statsRef.current[i].current ?? null;
          if(valueEl) valueEl.innerHTML = count.val.toString();
        }
      });
      
    });
  }, []);

  return (
    <section id="briefDesc" className="homeSection">
      <div className="grid md:grid-cols-2 grid-cols-1 justify-around pt-28 py-20 bg-gray-200">
        <div className="lg:p-16 p-5">
          <h1 className="text-5xl text-gray-700 font-bold pb-5 border-b-4 border-b-orange-600 border-black">Why work with us</h1>
          <p className="py-5">
            Allume, a Data Analytics company, helps to digitize businesses by
            focusing on client’s business challenges, needs, pain points and
            providing business-goals-oriented software solutions. We value close
            transparent cooperation and encourage our clients to participate
            actively in the project development life cycle.
          </p>
          <div ref={statsCont} className="grid grid-cols-2">
            {
              homeDescStats.map((stat, i) => (
                <div key={`${stat.title}${i}`} className="py-3">
                  <h1 className="lg:text-7xl md:text-6xl text-5xl text-orange-600 data flex items-center">
                    <span className="font-semibold" ref={statsRef.current[i]}>0</span>
                    <span>{stat.symbol}</span>  
                  </h1>
                  <p className="text-xl pl-1 pt-2 font-bold text-gray-600">{stat.title}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex justify-center p-10">
          <Image
            className="w-auto h-auto"
            src={"/whyAllume.png"}
            alt="Why work with us"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeDesc;
