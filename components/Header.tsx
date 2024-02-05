import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 h-[90px] shadow-xl z-30 bg-white">
      <div className="container mx-auto flex justify-between h-full items-center">
        <div className="">
          <Link href="/">
            <Image src="logo.svg" width={200} height={200} alt="Logo" />
          </Link>
        </div>

        <nav>
          <ul className="fixed w-full h-0 p-0 bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300">
            <li>Home</li>
            <li>About</li>
            <li>Testimonials</li>
            <li>Our Work</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
