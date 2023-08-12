"use client";

import Link from "next/link";

import { MENU_LIST } from "./Header";

const BMenu = () => {
  return (
    <div className="w-full h-full">
      <div className="mt-5 font-bold flex space-x-5">
        {MENU_LIST.map((item, index) => (
          <div key={index} className="mb-5 text-black">
            <Link href={item.href}>{item.text}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BMenu;
