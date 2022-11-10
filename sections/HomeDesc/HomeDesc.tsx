import Image from "next/image";
import React from "react";

const HomeDesc: React.FC = () => {
  return (
    <section id="briefDesc" className="homeSection">
      <div className="grid md:grid-cols-2 grid-cols-1 justify-around items-center py-28">
        <div className="flex flex-col p-10">
          <h1 className="text-5xl pb-10">Why work with us</h1>
          <p>
            Allume, a Data Analytics company, helps to digitize businesses by
            focusing on client’s business challenges, needs, pain points and
            providing business-goals-oriented software solutions. We value close
            transparent cooperation and encourage our clients to participate
            actively in the project development life cycle.
          </p>
          <ul>
            <li>
              - 50+ Solutions
            </li>
            <li>
              - 5+ Industries
            </li>
          </ul>
        </div>
        <div className="flex justify-center p-10">
          <Image
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
