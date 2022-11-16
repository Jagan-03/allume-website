import { ArrowRightIcon } from "@heroicons/react/24/solid";
import gsap from "gsap";
import { createContext, useContext, useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Head from "../components/Head";
import Header from "../components/Header";
import HomeClients from "../sections/HomeClients/HomeClients";
import HomeClientTestimonials from "../sections/HomeClientTestimonials/HomeClientTestimonials";
import HomeDesc from "../sections/HomeDesc/HomeDesc";
import HomeIntro from "../sections/HomeIntro/HomeIntro";
import HomeServices from "../sections/HomeServices/HomeServices";
import HomeTechnicalBenefits from "../sections/HomeTechnicalBenefits/HomeTechnicalBenefits";
import { CustomPointerContext, CustomPointerContextProvider } from "../components/CustomPointer/CustomPointerContext";
import Layout from "../components/Layout";
import CustomPointer from "../components/CustomPointer/CustomPointer";
import { Console } from "console";

export default function Home() {

  return (
    <>
        <Head />
          <Layout>
            <main id="main" className="relative">
              <HomeIntro />
              <HomeDesc />
              <HomeClients />
              <HomeServices />
              <HomeClientTestimonials />
              <HomeTechnicalBenefits />
            </main>
          </Layout>
    </>
  );
}
