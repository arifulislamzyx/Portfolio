import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";

export interface Data {
  id: number;
  name: string;
}

const Footer: React.FC = () => {
  const quickLink: Data[] = [
    { id: 1, name: "About" },
    { id: 2, name: "Portfolio" },
    { id: 3, name: "Resume" },
    { id: 4, name: "Contact" },
  ];

  const servicesLink: Data[] = [
    { id: 1, name: "About" },
    { id: 2, name: "About" },
    { id: 3, name: "About" },
  ];
  return (
    <section className="bg-black text-white py-12 px-4 md:px-8 z-10">
      <div className="flex justify-evenly">
        <div>
          <h3>Quick Link</h3>
          <div className="grid">
            {quickLink.map((links) => (
              <p key={links.id}>{links.name}</p>
            ))}
          </div>
        </div>
        <div>
          <h3>Services</h3>
          <div>
            {servicesLink.map((links) => (
              <p key={links.id} className=" ">
                {links.name}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <h3>Wedding Contact 202 Dog Hill Lane Beloit,KS 67420</h3>
          <p>+1416-8241228</p>
          <div className="text-4xl flex gap-2 cursor-pointer">
            <FaFacebook />
            <FaLinkedin />
            <FaGithub />
          </div>
        </div>
        <div>
          <h2>Let's Make Consultation With Us!</h2>
          <input className="w-56 h-8 rounded" type="text" name="" id="" />
          <button className="bg-orange-500 p-2 rounded ml-2">
            <FaLocationArrow />
          </button>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Footer;
