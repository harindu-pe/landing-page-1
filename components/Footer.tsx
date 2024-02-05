import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[150px]">
          <div className="w-full max-w-[400px] mx-auto mb-8 text-center xl:text-left">
            {/* logo */}
            <Link
              href="/"
              className="flex justify-center xl:justify-start mb-8"
            >
              <Image src="logo.svg" width={200} height={200} alt="Logo" />
            </Link>
            <p className="mb-8 text-xl">
              {
                "It is a long established fact that a reader will be distracted lookings."
              }
            </p>
          </div>
          <div className="flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end">
            <div>
              <h3 className="mb-3">Pages</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Testimonials</Link>
                </li>
                <li>
                  <Link href="#">Our Work</Link>
                </li>
                <li>
                  <Link href="#">News</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3">Services</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="#">Kitchen</Link>
                </li>
                <li>
                  <Link href="#">Living Area</Link>
                </li>
                <li>
                  <Link href="#">Bathroom</Link>
                </li>
                <li>
                  <Link href="#">Bedroom</Link>
                </li>
              </ul>
            </div>
            <div className="max-w-[260px] mx-auto xl:mx-0">
              <h3 className="mb-3">Contact</h3>
              <div className="flex flex-col gap-6 text-[20px]">
                <p>{"55 East Birchwood Ave. Brooklyn, New York 11201"}</p>
                <p>{"contact@interno.com"}</p>
                <p>{"(123) 456 - 7890"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <p className="text-center text-lg py-10 bg-white xl:border-t">
        {"Copyright © Interno 2024. All rights reserved."}
      </p>
    </footer>
  );
};

export default Footer;
