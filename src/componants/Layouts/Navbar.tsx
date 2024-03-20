"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

interface menuData {
  id: number;
  menu: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  const homeMenu: menuData[] = [
    { id: 1, menu: "Home", href: "/about" },
    { id: 2, menu: "About", href: "/about" },
    { id: 3, menu: "Service", href: "/about" },
    { id: 4, menu: "Resume", href: "/about" },
    { id: 5, menu: "Portfolio", href: "/about" },
    { id: 6, menu: "Testimonial", href: "/about" },
    { id: 7, menu: "blog", href: "/about" },
  ];

  return (
    <>
      {/* md:sticky top-0 */}
      <div className=" hidden   md:flex justify-evenly items-center bg-white p-5 text-black">
        <div>
          <h1 className="text-orange-500 text-2xl font-bold">
            Ariful <span className="text-purple-600">Islam</span>
          </h1>
        </div>
        <div className="flex gap-5 cursor-pointer">
          {homeMenu.map((menu) => (
            <p key={menu.id}>{menu.menu}</p>
          ))}
        </div>
        <div>
          <button className="bg-orange-600 p-3 rounded">Contact Us</button>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 md:hidden lg:hidden">
        <h1 className="text-orange-500">
          Ariful <span className="text-purple-600">Islam</span>
        </h1>
        <button
          onClick={() => setNavbar((navbar) => !navbar)}
          className="relative"
        >
          {navbar ? <RxCross1></RxCross1> : <GiHamburgerMenu></GiHamburgerMenu>}
          <div className="absolute z-10 top-5 -left-6 bg-white p-4">
            {navbar && (
              <div>
                <div className="grid grid-cols-1 gap-2 cursor-pointer">
                  {homeMenu.map((menu) => (
                    <p key={menu.id}>{menu.menu}</p>
                  ))}
                </div>
                <div>
                  <button className="bg-orange-600 p-3 rounded">
                    Contact Us
                  </button>
                </div>
              </div>
            )}
          </div>
        </button>
      </div>
    </>
  );
};

export default Navbar;
