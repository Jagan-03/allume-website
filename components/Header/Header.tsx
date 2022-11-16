import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavLinks from "../NavLinks";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import ContactButton from "../ContactButton";
import Link from "next/link";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {

    const [open, setOpen] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    
    const handleScroll = (e: any) => { 
      setScrollTop(window.scrollY);
  }
  
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
    
        return () => {
        window.removeEventListener('scroll', handleScroll, true);
        };
    
    }, []);

  return (
      <div className={`z-50 fixed top-0 w-full px-10 ${scrollTop > 0 && "bg-primary"} duration-500`}>
    <header>
      <nav className="w-full md:p-7 p-5 flex justify-between">
        <div className="z-40 p-2 md:w-auto w-full right-0 flex justify-between md:static absolute">
          <Link href="/">
            <Image alt="Allume Logo" src="/logo.png" className="w-auto h-auto" width={50} height={50} />
          </Link>
          <div onClick={() => setOpen(!open)}>
            {
              !open ?
              <Bars3Icon className="h-7 w-7 md:hidden text-white"/> :
              <XMarkIcon className="h-7 w-7 md:hidden"/>
            }
          </div>
        </div>

        <div className="relative w-3/4">
          <ul className="md:flex hidden justify-end space-x-20 items-center h-full">
            <NavLinks scrollTop={scrollTop}/>
          </ul>
        </div>

        <ContactButton scrollTop={scrollTop}/>

        {/* Mobile Nav */}
        <ul className={`md:hidden fixed left-0 bg-white w-full h-full bottom-0 py-24 duration-500 ${open ? "top-0" : "top-[-100%]"}`}>
            <NavLinks />
        </ul>

      </nav>
    </header>
  </div>
  );
};

export default Header;
