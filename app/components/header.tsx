"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";3
import { IoMenu } from "react-icons/io5";


const Navbar = () => {
  const [position, setPosition] = React.useState("bottom");
  return (
    <nav className="bg-[#f3f5f7] fixed w-full z-20 px:14 md:px-0 lg:px-24 top-0 start-0 text-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3">
        <a href="/" className="flex items-center ml-3 space-x-3 rtl:space-x-reverse">
          <Image
            src="/logo.png"
            alt="logo"
            height={736}
            width={387}
            className="h-10 w-[5rem] md:h-10 md:w-[5rem]"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href="https://apply.fundgenie.co.za/" target="_blank">
          <motion.p
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            
            className="bg-[#e0cb70] px-4 py-2 rounded-full hover:bg-[#ae9c4b] text-black"
          >
            Apply Now
          </motion.p>
          </Link>

          
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a
                href="/"
                className="block py-2 px-8 text-black  rounded md:bg-transparent md:hover:text-[#e0cb70] md:p-0 "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#e0cb70] md:p-0  dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/faqs"
                className="block py-2 px-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#e0cb70] md:p-0  dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
              >
                FAQs
              </a>
            </li>
            {/* <li>
              <a
                href="/"
                className="block py-2 px-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#e0cb70] md:p-0  dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </a>
            </li> */}
            <li>
              <a
                href="/contact"
                className="block py-2 px-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#e0cb70] md:p-0  dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
            <li>
              <ul>
                <li>
                  <a
                    href="/brokers"
                    className="block py-2 px-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#e0cb70] md:p-0  dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Become An Affiliate
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;