import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";
import navLinks from "../../utils/navLinks";

interface NavLinksProps {}

const NavLinks: React.FC<NavLinksProps> = (props) => {

  return (
    <>
      {navLinks.map((item) => (
        <li
          key={item.id}
          className="relative top-0 group"
        >
          <Link
            href="/"
            className="md:text-white p-3 hover:underline flex items-center justify-between space-x-1 md:border-none border"
          >
            {item.title}
            {
                item.hasMenu && 
                <ChevronDownIcon className="h-5 w-5 md:text-white" />
            }
          </Link>
          {item.hasMenu && (
            <div>
              <div className="md:absolute bg-white left-0 top-12 md:w-48 w-full hidden group-hover:md:block hover:md:block">
                <div className="flex flex-col">
                  {item.menuItemLinks.map((link) => (
                    <Link
                      key={link.id}
                      href={link.link}
                      className="p-3 hover:bg-sky-50 hover:text-sky-700"
                    >
                      {link.title}
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
