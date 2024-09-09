"use client";

import { useState, useEffect } from "react";
import { TiThMenuOutline } from "react-icons/ti";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { Social } from "@/components/social";
import { NavMobile } from "@/components/nav-mobile";

export const Header = () => {
  const [isActive, setisActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setisActive(true) : setisActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "h-[100px] lg:h-[110px] shadow-lg" : "h-[120px] lg:h-[150px]"
      } bg-white fixed left-0 right-0 top-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className="flex justify-between items-center h-full pl-[50px] pr-[60px]">
        <Logo />
        <Nav className="hidden xl:flex" />
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="xl:hidden absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer"
        >
          <TiThMenuOutline size={30} />
        </div>
        <div
          className={`${navMobile ? "max-h-full" : "max-h-0"} ${
            isActive
              ? "top-[100px] lg:top-[110px]"
              : "top-[120px] lg:top-[150px]"
          } fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}
        >
          <NavMobile />
        </div>
        <div className="hidden xl:flex">
          <Social />
        </div>
      </div>
    </header>
  );
};
