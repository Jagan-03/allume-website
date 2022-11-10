import clsx from "clsx";
import React from "react";
import styles from "../../styles/Home.module.css";
import ContactButton from "../../components/ContactButton";

const HomeIntro: React.FC = () => {
  return (
    <section id="intro" className="homeSection">
        <div className={clsx(styles.introSection, "w-full flex flex-col items-start space-y-10 px-10 justify-center bg-gradient-to-r from-cyan-700 to-blue-700")}>
            <h1 className="text-6xl text-white">Allume Consultancy</h1>
            <p className="text-lg text-white">
                The low-code data warehouse integration platform to power informed decision making for data-driven growth.
            </p>
            <ContactButton />
        </div>
    </section>
  )
}

export default HomeIntro;
