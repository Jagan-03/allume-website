import gsap from "gsap";
import { createRef, RefObject, useEffect, useRef } from "react";
import Head from "../components/Head";
import Layout from "../components/Layout";

export default function Contact() {

  const wordsRef = useRef([...Array(3)].map(word => createRef() as RefObject<HTMLDivElement>));


  useEffect(() => {
    wordsRef.current.forEach((word, i) => {            
      gsap.fromTo(word.current, {
        y: 150
      }, {
        y: 0,
        duration: 0.5,
        ease: 'power1.inout',
        delay: i * 0.2
      });
    })
  }, []);

  return (
    <>
        <Head title="Allume | Contact"/>
          <Layout>
            <main>
                <section id="contact">
                    <div className="bg-primary h-full relative flex items-center justify-center">
                      <div className="h-40 flex justify-center items-end space-x-6 overflow-hidden">
                        <h1 ref={wordsRef.current[0]} className="text-9xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-orange-600 animate-text leading-relaxed">
                          <span>Let's </span> 
                        </h1>
                        <h1 ref={wordsRef.current[1]} className="text-9xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-orange-600 animate-text leading-relaxed">
                          <span>work </span>
                        </h1>
                        <h1 ref={wordsRef.current[2]} className="text-9xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-orange-600 animate-text leading-relaxed">
                          <span>together!</span>   
                        </h1>
                      </div>
                    </div>
                </section>
            </main>
          </Layout>
    </>
  );
}
