"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { GiWoodenCrate } from "react-icons/gi";
import { MdOutlineCarpenter } from "react-icons/md";
import { LuPaintbrush } from "react-icons/lu";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Feactured = () => {
  const [position, setPosition] = React.useState("bottom");
  return (
    <div className="px-5 md:px-24 mt-8" id="about">
      <h2 className="text-[56px] pb-4">About us</h2>
      <div className="flex flex-col md:flex-row gap-6 pb-20">
        <div className="w-full md:w-1/2">
          <Image
            src={"/hero2.jpg"}
            width={600}
            height={600}
            alt="product"
          ></Image>
        </div>
        <div className="w-full md:w-1/2 px-5 md:px-12 mt-4">
          <h3 className="text-xs text-orange-800 mb-7">
            Transform Your Space with Exceptional home and work solutions
          </h3>
          <h2 className="text-2xl font-bold mb-8 text-orange-950">
            Elevate Your Environment With Our Innovative Expertise
          </h2>
          <p className="mb-10">
            Crafting exceptional spaces with quality, style, and precision in
            every personalized home project. Unveiling elegance and durability
            that redefines your living and working environments.
          </p>
          <Link href="#" target="_blank">
            <motion.button
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="bg-orange-800 px-4 py-2 hover:bg-orange-900 text-white rounded-sm text-sm"
            >
              Get A Quote
            </motion.button>
          </Link>
        </div>
      </div>

      <div className=" md:py-20" id="services">
        <h2 className="text-[30px] md:text-[56px] pb-4">Our Services</h2>
        <div className="flex flex-col md:flex-row gap-5 text-center">
          <div className="card flex flex-col items-center justify-center w-full md:w-1/3 p-10 bg-white border-orange-300 border-2">
            <div className="heading flex gap-3 border-b-2 border-orange-300 pb-4">
              <div className="text-3xl text-orange-600">
                <GiWoodenCrate />
              </div>

              <h2 className="font-bold text-orange-950 ">
                Expert Craftmanship
              </h2>
            </div>

            <p className="pt-4">
              Emphasize the high level of skill and attention to detail in your
              home & work installations.
            </p>
          </div>
          <div className="card flex flex-col items-center justify-center w-full md:w-1/3 p-10 bg-white border-orange-300 border-2">
            <div className="heading flex gap-3 border-b-2 border-orange-300 pb-4">
              <div className="text-3xl text-orange-600">
                <MdOutlineCarpenter />
              </div>

              <h2 className="font-bold text-orange-950 ">Innovative Designs</h2>
            </div>

            <p className="pt-4">
              Emphasize the high level of skill and attention to detail in your
              home & work installations.
            </p>
          </div>
          <div className="card flex flex-col items-center justify-center w-full md:w-1/3 p-10 bg-white border-orange-300 border-2">
            <div className="heading flex gap-3 border-b-2 border-orange-300 pb-4">
              <div className="text-3xl text-orange-600">
                <LuPaintbrush />
              </div>

              <h2 className="font-bold text-orange-950 ">
                Expert Craftmanship
              </h2>
            </div>

            <p className="pt-4">
              Emphasize the high level of skill and attention to detail in your
              home & work installations.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:mt-20">
        <div className="w-full md:w-1/2 px-12 mt-20">
          <h3 className="text-xs text-orange-800 mb-7">
            Tailoring solutions to individual preferences
          </h3>
          <h2 className="text-2xl font-bold mb-8 text-orange-950">
            Dedicated Experts In Woodworking And Construction Excellence
          </h2>
          <p className="mb-5">
            At Anglemar, we blend artistry with functionality to create
            outstanding woodwork and construction solutions. Our passion drives
            every project&apos;s success.
          </p>
          <ul className="mb-5">
            <li className="flex gap-1">
              <span className="pt-1 text-orange-700">
                <IoIosArrowDroprightCircle />
              </span>
              Superior quality in every detail
            </li>
            <li className="flex gap-1">
              <span className="pt-1 text-orange-700">
                <IoIosArrowDroprightCircle />
              </span>
              Tailoring solutions to individual preferences.
            </li>
            <li className="flex gap-1">
              <span className="pt-1 text-orange-700">
                <IoIosArrowDroprightCircle />
              </span>
              Experienced professionals at your service.
            </li>
            <li className="flex gap-1">
              <span className="pt-1 text-orange-700">
                <IoIosArrowDroprightCircle />
              </span>
              Ensuring complete satisfaction with every project.
            </li>
          </ul>
          <button className="bg-orange-700 px-6 py-2 text-teal-50 flex gap-2 rounded-sm">
            <span>Learn More</span>
            <span className="pt-1">
              <IoIosArrowDroprightCircle />
            </span>
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={"/capernter.png"}
            width={500}
            height={500}
            alt="product"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Feactured;
