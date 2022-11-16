import Link from "next/link";
import React from "react";

interface ContactButtonProps 
{
  scrollTop?: number;
}

const Contact: React.FC<ContactButtonProps> = (props) => {
  const { scrollTop = 0 } = props;
  return (
        <Link 
          href="/"
          type="button"
          className={`z-40 p-2 flex items-center md:mr-0 mr-7 ${scrollTop > 0 ? "bg-sky-600" : "hover:bg-white hover:text-sky-700 border"} text-white duration-500`}
        >
          <span>Contact Us</span>
        </Link>
  )
}

export default Contact;
