"use client";

import Link from "next/link";

import { navData } from "@/constants";

interface NavProps {
  className?: string;
}

export const Nav: React.FC<NavProps> = ({ className }) => {
  return (
    <nav className={`${className} `}>
      <ul className="flex items-center gap-x-[58px]">
        {navData.map(({ name, href }, index) => (
          <li key={index}>
            <Link
              href={href}
              className="link hover:border-b-2 hover:border-dark transition duration-300"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
