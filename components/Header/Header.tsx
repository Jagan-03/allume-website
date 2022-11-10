import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavLinks from "../NavLinks";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import ContactButton from "../ContactButton";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {

    const [open, setOpen] = useState(false);

  return (
      <div className="z-50 fixed top-0 w-full">
    <header>
      <nav className="w-full md:p-7 p-5 flex justify-between">
        <div className="z-50 p-2 md:w-auto w-full right-0 flex justify-between md:static absolute">
          <Image alt="Allume Logo" src={"/logo.png"} width={50} height={50} />
          <div onClick={() => setOpen(!open)}>
            {
              !open ?
              <Bars3Icon className="h-7 w-7 md:hidden text-white"/> :
              <XMarkIcon className="h-7 w-7 md:hidden"/>
            }
          </div>
        </div>

        <div className="relative">
          <ul className="md:flex hidden justify-center items-center h-full space-x-5">
            <NavLinks />
          </ul>
        </div>

        <ContactButton />

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
