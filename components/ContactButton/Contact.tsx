import Link from "next/link";
import React from "react";

interface ContactButtonProps {}

const Contact: React.FC<ContactButtonProps> = () => {
  return (
        <Link 
          href="/"
          type="button"
          className="border p-2 flex items-center md:mr-0 mr-7 text-white hover:bg-white hover:text-sky-700 duration-500"
        >
          <span>Contact Us</span>
        </Link>
  )
}

export default Contact;
