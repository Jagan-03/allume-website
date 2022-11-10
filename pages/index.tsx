import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Head from "../components/Head";
import Header from "../components/Header";
import HomeClients from "../sections/HomeClients/HomeClients";
import HomeClientTestimonials from "../sections/HomeClientTestimonials/HomeClientTestimonials";
import HomeDesc from "../sections/HomeDesc/HomeDesc";
import HomeIntro from "../sections/HomeIntro/HomeIntro";
import HomeServices from "../sections/HomeServices/HomeServices";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  return (
    <>
        <Head />
        <Header />

        <main id="main" className="relative">
          <HomeIntro />
          <HomeDesc />
          <HomeClients />
          <HomeServices />
          <HomeClientTestimonials />
        </main>

        <Footer />
    </>
  );
}
