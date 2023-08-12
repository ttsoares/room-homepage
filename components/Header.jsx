"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const MENU_LIST = [
  { text: "home", href: "/" },
  { text: "shop", href: "/shop" },
  { text: "about", href: "/about" },
  { text: "contact", href: "/contact" },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Burger menu */}
      <div className="flex w-full  bg-white md:hidden items-center ">
        {showMenu ? (
          <div
            className="h-20 ml-5 flex items-center animate-flip-down animate-delay-300 animate-once"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        ) : (
          <div
            className="h-20 w-full ml-5 flex items-center animate-flip-up animate-delay-300 animate-once"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Image
              src="/icon-hamburger.svg"
              alt="menu"
              width={20}
              height={20}
              className="mr-28"
            />
            <Image src="/logo-black.svg" alt="logo" width={65} height={65} />
          </div>
        )}

        {showMenu && (
          <div className="w-full ">
            <div className="mt-5 ml-8 font-bold flex space-x-6 animate-jump-in animate-delay-300 animate-once">
              {MENU_LIST.map((item, index) => (
                <div key={index} className="mb-5 text-black">
                  <Link href={item.href}>{item.text}</Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* desktop menu */}
      <div className="hidden md:block absolute top-10 left-0 w-full md:w-[600px] h-28 bg-transparent z-10">
        <div className="flex justify-start items-center w-full ml-8">
          <div className="hidden md:block p-3 md:ml-5 w-24 h-12">
            <Image src="/logo.svg" alt="logo" width={85} height={85} />
          </div>

          <div className="hidden  md:flex">
            {MENU_LIST.map((item, index) => (
              <div
                className="flex flex-col justify-center items-center"
                key={index}
              >
                <div className="mx-7 mb-5 h-3 text-white text-lg peer hover:cursor-pointer">
                  <Link href={item.href}>{item.text}</Link>
                </div>
                <div className="mx-4 w-6 h-1 bg-white rounded-lg invisible peer-hover:visible"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
