"use client";
import Image from "next/image";
import React, { useState } from "react";
import img1 from "../../../public/HTML:CSS.png";
import img2 from "../../../public/typescript.png";
import img3 from "../../../public/nextjs-icon.png";
import img4 from "../../../public/framerMotion.webp";
import img5 from "../../../public/mongoDb.png";
import img6 from "../../../public/nodeJs.png";

const EducatioEX: React.FC = () => {
  const [experience, setExperience] = useState(true);
  const [education, setEducation] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const skillsImage = [
    { id: 1, src: img1, name: "HTML & CSS" },
    { id: 2, src: img2, name: "Typescript" },
    { id: 3, src: img3, name: "NextJS" },
    { id: 4, src: img4, name: "Framer Motion" },
    { id: 5, src: img5, name: "MongoDB" },
    { id: 6, src: img6, name: "NodeJS" },
  ];

  const handleExperience = () => {
    if (!buttonDisabled) {
      setExperience(true);
      setEducation(false);
      setButtonDisabled(true);
    }
  };
  const handleEducation = () => {
    if (!buttonDisabled) {
      setExperience(false);
      setEducation(true);
      setButtonDisabled(true);
    }
  };
  return (
    <div className="z-50 sticky top-0 bg-orange-100 flex">
      <div className="w-1/2 items-center">
        <div className="ml-20 py-6">
          <p>Resume</p>
          <h3 className="text-3xl font-extrabold">Core Skills</h3>
        </div>
        <div className="grid grid-cols-2 gap-10 p-6">
          {skillsImage.map((images) => (
            <div key={images.id} className="text-xl font-bold ">
              <Image
                key={images.id}
                src={images.src}
                alt="typeScript"
                width={120}
                height={50}
              ></Image>
              <h3 className="mt-2 ml-3">{images.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2">
        <div>
          <div className="border-orange-600 w-3/4 border-2 rounded p-4 flex text-center gap-5">
            <button
              onClick={handleExperience}
              className={` ${
                buttonDisabled
                  ? "bg-white p-2 rounded border-red-600 border-2 hover:bg-orange-300"
                  : "bg-orange-600 p-2 rounded"
              }`}
            >
              Professional Experience
            </button>
            <button
              onClick={handleEducation}
              className={`${
                buttonDisabled
                  ? "bg-orange-600 px-16 py-2 rounded"
                  : "bg-white px-16 border-red-600 border-2 rounded hover:bg-orange-300"
              }`}
            >
              Education
            </button>
          </div>
        </div>
        {experience && <h3>Here will show experience</h3>}
        {education && <h3>Here will show Education</h3>}
      </div>
    </div>
  );
};

export default EducatioEX;
