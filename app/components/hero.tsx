import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center bg-gray-800">
      <Image
        src="/herobg.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 p-4 text-white">
        <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
        <p className="mt-4 text-xl">We provide the best services for you.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          ducimus excepturi maxime inventore quibusdam delectus velit quas,
          voluptatem vero atque!
        </p>
        <Link href="#about" target="_blank">
          <button className="mt-8 px-6 py-3 bg-red-800  text-lg hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
};

export default Hero;
