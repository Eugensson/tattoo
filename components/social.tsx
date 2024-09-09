import Link from "next/link";

import { socialData } from "@/constants";

export const Social = () => {
  return (
    <ul className="flex justify-center items-center gap-x-8">
      {socialData.map(({ href, icon: Icon }, index) => (
        <li key={index}>
          <Link href={href} target="_blank" rel="noreferrer">
            <Icon size={24} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
