import React, { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import clsx from "clsx";
import gsap from "gsap";
import clientList from "../../utils/clientList";

const HomeClients: React.FC = () => {

  return (
    <section id="clients" className="homeSection">
      <div className={clsx("pt-5", styles.homeClientWrapper)}>
        {clientList.map((client, i) => (
          <div
            key={`client${i}`}
            className={clsx(
              "flex items-center justify-center text-lg text-gray-900",
              styles.homeClientItem
            )}
          >
            <h1 className="clientNames text-2xl font-bold text-gray-500">{client.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeClients;
