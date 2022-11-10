import React, { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import clsx from "clsx";
import gsap from "gsap";

const HomeClients: React.FC = () => {
  const clientsList = [...Array(20)];

  return (
    <section id="clients" className="homeSection">
      <div className={clsx("", styles.homeClientWrapper)}>
        {clientsList.map((client, i) => (
          <div
            key={`client${i}`}
            className={clsx(
              "flex items-center justify-center text-lg text-gray-900",
              styles.homeClientItem
            )}
          >
            <h1 className="clientNames">Client {i}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeClients;
