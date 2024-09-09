import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src={"/header/logo.svg"} alt="logo" width={188} height={90} />
    </Link>
  );
};
