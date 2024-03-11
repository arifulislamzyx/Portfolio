"use client";
import Image from "next/image";
import React from "react";
import webDesign from "../../../public/webDesign.png";
import webDevelopment from "../../../public/WebDevelopment.png";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  return (
    <section className="sticky top-0 bg-white z-50 ">
      <div className="text-center py-8 ">
        <p>Services</p>
        <p className="text-4xl">My Services</p>
      </div>
      <div className="mx-auto md:flex md:justify-evenly">
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 500 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="w-64 border-orange-400 border-2 rounded py-10 px-5 transition-all hover:bg-orange-300"
        >
          <Image src={webDesign} alt="webDesign" width={60} height={40}></Image>
          <h3 className="my-5 text-lg md:text-2xl font-bold">Web Design</h3>
          <p>
            Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only
            text generator treatment contrary.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-64 border-orange-400 border-2 rounded py-10 px-5 hover:bg-orange-300"
        >
          <Image
            src={webDevelopment}
            alt="webDesign"
            width={60}
            height={40}
          ></Image>
          <h3 className="my-5 text-lg md:text-2xl font-bold">
            Web Development
          </h3>
          <p>
            Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only
            text generator treatment contrary.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: -500 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="w-64 border-orange-400 border-2 rounded py-10 px-5 hover:bg-orange-300"
        >
          <Image src={webDesign} alt="webDesign" width={60} height={40}></Image>
          <h3 className="my-5 text-lg md:text-2xl font-bold">Web Design</h3>
          <p>
            Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only
            text generator treatment contrary.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
