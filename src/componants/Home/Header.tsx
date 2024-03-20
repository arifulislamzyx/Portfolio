"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import profileImg from "../../../public/portfolio.png";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    // sticky top-0 z-10
    <div className="bg-orange-100  py-8 px-4 md:px-8 flex justify-between items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 500 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="w-1/2 pl-3"
      >
        <p>I'M GLAD YOU'RE HERE.</p>
        <h1 className="text-3xl font-bold mt-3">
          Hi 👋 I’m Ariful Islam <span className="text-orange-600">modern</span>{" "}
          <span className="text-red-600">Problem</span>{" "}
          <span className="text-green-500">Solution</span> With Best Javascript
          and React Experience
        </h1>

        <p className="mt-3">
          Modern world demand a Great Looking Responsive and Fastest Useable
          Website to use Flexibly
        </p>
        <div className="mt-20">
          <p className="text-2xl uppercase">Find with me:</p>
          <div className="flex gap-4 mt-3">
            <Link
              href="https://linkedin.com/in/mdaimaruf"
              className="p-3 rounded bg-blue-600 text-white transition-all duration-500 ease-in-out hover:bg-sky-300 hover:rotate-90  "
            >
              <FaLinkedinIn></FaLinkedinIn>
            </Link>
            <Link
              href="https://facebook.com/mdai.org"
              className="p-3 rounded bg-blue-600 text-white transition-all duration-500 ease-in-out hover:bg-green-300 hover:rotate-90  "
            >
              <FaFacebookF></FaFacebookF>
            </Link>
            <Link
              href="https://github.com/arifulilamzyx"
              className="p-3 rounded bg-blue-600 text-white transition-all duration-500 ease-in-out hover:bg-orange-300 hover:rotate-90  "
            >
              <FaGithub></FaGithub>
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded pr-8"
      >
        <Image
          alt="arifulIslam"
          src={profileImg}
          width={400}
          height={300}
        ></Image>
      </motion.div>
    </div>
  );
};

export default Header;
