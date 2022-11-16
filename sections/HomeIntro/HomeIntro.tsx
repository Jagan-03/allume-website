import clsx from "clsx";
import React from "react";
import styles from "../../styles/Home.module.css";
import ContactButton from "../../components/ContactButton";

const HomeIntro: React.FC = () => {
  return (
    <section id="intro" className="homeSection">
        <div className={clsx(styles.introSection, "w-full flex flex-col items-start space-y-10 lg:px-10 px-5 justify-center bg-gradient-to-r from-cyan-700 to-blue-700 before:block before:absolute before:-inset-1 before:bg-black before:opacity-70 relative")}>
              <h1 className="text-6xl text-white z-30 font-semibold">Allume Consultancy</h1>
              <p className="text-lg text-white z-30">
                  The low-code data warehouse integration platform to power informed decision making for data-driven growth.
              </p>
              <ContactButton />
        </div>
    </section>
  )
}

export default HomeIntro;
