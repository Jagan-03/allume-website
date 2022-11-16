import gsap from "gsap";
import Link from "next/link";
import React, { useContext, useState } from "react";
import navLinks from "../../utils/navLinks";
import { CustomPointerContext } from "../CustomPointer/CustomPointerContext";

interface NavLinksProps 
{
  scrollTop?: number;
}

const NavLinks: React.FC<NavLinksProps> = (props) => {
  
  const { scrollTop = 0 } = props;

  const customPointer = useContext(CustomPointerContext);
  
  const handleMove = (e: any) => {    
      gsap.to(customPointer, {
        scale: 1.5,
        background: '#0284c7',
        duration: 0.5,
      });
  };
  const handleLeave = (e: any) => {
    gsap.to(customPointer, {
      scale: 1,
      background: 'none',
      duration: 0.5,
    });
};

  return (
    <>
      {navLinks.map((item) => (
        <li
          key={item.id}
          className="relative top-0 group"
        >
          <Link
            href="/"
            onMouseOver={handleMove}
            onMouseLeave={handleLeave}
            className="p-3 hover:underline underline-offset-8 decoration-orange-600 flex items-center justify-between space-x-1 md:border-none border"
          >
            <p className="md:text-white">
            {item.title}
            </p>
          </Link>
          {item.hasMenu && (
            <div>
              <div className="md:absolute bg-white left-0 top-12 md:w-48 w-full hidden group-hover:md:block duration-500">
                <div className="flex flex-col z-50">
                  {item.menuItemLinks.map((link) => (
                    <Link
                      key={link.id}
                      href={link.link}
                      className="p-3 hover:text-sky-700"
                    >
                      <p className="z-50">
                      {link.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </li>
      ))}
    </>
  );
};

export default NavLinks;
