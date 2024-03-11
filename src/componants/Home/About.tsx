"use client";
import Image from "next/image";
import React from "react";
import profileImg from "../../../public/portfolio.png";
import { motion } from "framer-motion";
import Link from "next/link";
// import cv from "";

const About: React.FC = () => {
  const handleCVDownload = () => {
    const cvUrl = "@/ArifulIslam.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Ariful Islam.pdf";
    link.click();
  };
  return (
    <section className=" pb-20 sticky top-0 bg-white z-50">
      <div className="flex items-center border">
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 500 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-1/2 ml-10 border border-opacity-10 bg-white rounded-3xl p-5 "
        >
          <Image alt="arifulIslam" src={profileImg}></Image>
        </motion.div>
        <div className="ml-5 w-1/2 p-4">
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl flex items-center gap-2"
          >
            <Image
              src="https://ibb.co/zbQ8Rbw"
              alt="orangeDot"
              width={10}
              height={10}
            ></Image>
            About Me
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 mt-6"
          >
            I am a React Developer to Build your Most Demanding website
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Contrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old.
          </motion.p>

          <div className="flex gap-4 my-8">
            <p className="text-base font-bold grid items-center">
              <span className="text-3xl font-bold">4+</span>
              Complete Project
            </p>
            <p className="text-base font-bold grid items-center">
              <span className="text-3xl font-bold">4+</span>
              Clients on worldwide
            </p>
            <p className="text-base font-bold grid items-center">
              <span className="text-3xl font-bold">4+</span>
              Client Satisfied
            </p>
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0, x: 500 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onClick={handleCVDownload}
            className="relative text-white bg-orange-600 p-3 rounded overflow-hidden hover:bg-transparent hover:text-white transition-all duration-300"
          >
            <span className="absolute top-0 left-0 hover:bg-green-400 w-1/2 h-full hover:left-0 hover:w-full transition-all duration-1000"></span>

            <span className="z-10 relative">Download My CV</span>
            <span className="absolute top-0 right-0 hover:bg-green-400 w-1/2 h-full hover:right-0 hover:w-full transition-all duration-1000"></span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default About;
