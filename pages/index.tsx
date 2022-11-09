import Footer from '../components/Footer/Footer';
import Head from '../components/Head';
import Header from '../components/Header';
import styles from "../styles/Home.module.css";
import clsx from 'clsx';
import ContactButton from '../components/ContactButton';

export default function Home() {
  return (
    <>
      <Head />
      <Header />

      <main>
        <section id="intro">
          <div className={clsx(styles.introSection, "w-full flex flex-col items-start space-y-10 pl-10 justify-center bg-gradient-to-r from-cyan-700 to-blue-700")}>
            <h1 className="text-7xl text-white">Allume Consultancy</h1>
            <p className="text-lg text-white">
              The low-code data warehouse integration platform to power informed decision making for data-driven growth.
            </p>
            <ContactButton />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
