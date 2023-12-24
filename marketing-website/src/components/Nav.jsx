import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
const Nav = () => {
  const [openNavbar, setOpenNavbar] =useState(true)
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container relative">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className={`flex-1 flex justify-center items-center gap-16  max-lg:flex-col max-lg:absolute lg:flex max-lg:top-14 max-lg:bg-coral-red max-lg:w-full
        max-lg:w-60 max-lg:right-0 max-lg:gap-8 max-lg:py-5 ${openNavbar ? 'max-lg:flex max-lg:z-50' : 'max-lg: hidden'}`} onClick={() => setOpenNavbar(!openNavbar)}>
          {navLinks.map((links) => (
            <li key={links.label}>
              <a
                href={links.href}
                className="font-montserrat leading-normal text-lg text-slate-gray max-lg:text-white"
              >
                {links.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="cursor-pointer hidden max-lg:block">
            <img src={hamburger} width={25} height={25} alt="hamburger" onClick={() => setOpenNavbar(!openNavbar)}/>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
