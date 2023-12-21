import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@radix-ui/themes";

const Navbar = () => {
  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <Button variant="soft" size="3">
          Sign in
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
