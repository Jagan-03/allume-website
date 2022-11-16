import React from "react";
import styles from "../../styles/Footer.module.css";
import ContactForm from "./ContactForm";
import FooterBanner from "./FooterBanner";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
        <ContactForm />
        <FooterBanner />
    </footer>
  )
}

export default Footer;
