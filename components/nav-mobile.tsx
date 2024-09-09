"use client";

import Link from "next/link";

import { navData } from "@/constants";
import { Social } from "@/components/social";

export const NavMobile = () => {
  return (
    <nav className="w-full h-full flex flex-col justify-evenly overflow-hidden">
      <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-8">
        {navData.map(({ href, name }, index) => (
          <li key={index}>
            <Link href={href} className="text-2xl font-primary uppercase">
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="">
        <Social />
      </div>
    </nav>
  );
};
