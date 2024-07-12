import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Feactured = () => {
  return (
    <div className="px-24 mt-8">
      <h2 className="text-[56px] pb-4">About us</h2>
      <div className="flex gap-6">
        <div className="w-full md:w-1/2">
          <Image
            src={"/Hero2.jpg"}
            width={600}
            height={600}
            alt="product"
          ></Image>
        </div>
        <div className="w-full md:w-1/2 px-12">
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
          <button
            
            className="bg-orange-700 px-3 py-2 text-teal-50"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feactured;
