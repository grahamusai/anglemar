"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Feactured = () => {
  const [position, setPosition] = React.useState("bottom");
  return (
    <div className="px-24 mt-8">
      <h2 className="text-[56px] pb-4">About us</h2>
      <div className="flex gap-6 pb-20">
        <div className="w-full md:w-1/2">
          <Image
            src={"/Hero2.jpg"}
            width={600}
            height={600}
            alt="product"
          ></Image>
        </div>
        <div className="w-full md:w-1/2 px-12 mt-4">
          <h3 className="text-xs text-orange-400 mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque
            quidem nostrum.
          </h3>
          <h2 className="text-2xl font-bold mb-8 text-orange-950">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            aspernatur quia. Sapiente nulla dolorem ipsa similique reprehenderit
            ad vero iusto neque architecto et, molestias at quas doloremque
            exercitationem facilis earum.
          </p>
          <Link href="#" target="_blank">
          <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            
            className="bg-[#e0cb70] px-4 py-2 hover:bg-[#ae9c4b] text-black"
          >
            Apply Now
          </motion.button>
          </Link>
        </div>
      </div>

      <div className="flex py-20 gap-5 text-center">
        <div className="w-full md:w-1/3 p-10 bg-white border-orange-300 border-2">
          <h2 className="font-bold text-orange-950 border-b-2 border-orange-300 pb-4">
            Expert Craftmanship
          </h2>
          <p className="pt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            culpa quibusdam esse ipsum vitae dicta.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-10 bg-white border-orange-300 border-2">
          <h2 className="font-bold text-orange-950 border-b-2 border-orange-300 pb-4">
            Expert Craftmanship
          </h2>
          <p className="pt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            culpa quibusdam esse ipsum vitae dicta.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-10 bg-white border-orange-300 border-2">
          <h2 className="font-bold text-orange-950 border-b-2 border-orange-300 pb-4">
            Expert Craftmanship
          </h2>
          <p className="pt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            culpa quibusdam esse ipsum vitae dicta.
          </p>
        </div>
      </div>

      <div className="flex mt-20">
        <div className="w-full md:w-1/2 px-12 mt-20">
          <h3 className="text-xs text-orange-400 mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque
            quidem nostrum.
          </h3>
          <h2 className="text-2xl font-bold mb-8 text-orange-950">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            aspernatur quia. Sapiente nulla dolorem ipsa similique reprehenderit
            ad vero iusto neque architecto et, molestias at quas doloremque
            exercitationem facilis earum.
          </p>
          <button className="bg-orange-700 px-6 py-2 text-teal-50">
            Learn More
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
