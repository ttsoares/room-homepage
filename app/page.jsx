"use client";

import Link from "next/link";

import Image from "next/image";
import { useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import arrow from "/public/icon-arrow.svg";
import Chevrons from "@/components/Chevrons";

const IMGTXT = [
  {
    dskimg: "/desktop-image-hero-1.jpg",
    mlbimg: "/mobile-image-hero-1.jpg",
    title: "Discover innovative way's to decorate",
    content:
      "We provide unmatched quality, confort and style for property owners acress the country. Our experts combine form and function in bringuing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    dskimg: "/desktop-image-hero-2.jpg",
    mlbimg: "/mobile-image-hero-2.jpg",
    title: "We are avalilable all acress the globe",
    content:
      "With stores all over the world, it's easy for you to find furnitures for your home or place of business. Locally, we're in most major cities throughout the contry. Find the branch neares you using our stor locator. Any question? Don't hesitate to contact us today.",
  },
  {
    dskimg: "/desktop-image-hero-3.jpg",
    mlbimg: "/mobile-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    content:
      "Our modern furnitur stor provide a high level f quality. our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office",
  },
];

//---------------------------------
export default function Home() {
  const ind = useRef(0);
  const [render, setRender] = useState();

  useHotkeys("right arrow", increment, [ind.current]);
  useHotkeys("left arrow", decrement, [ind.current]);

  function increment() {
    ind.current = ind.current + 1;
    if (ind.current > 2) ind.current = 0;
    setRender(!render);
  }

  function decrement() {
    ind.current = ind.current - 1;
    if (ind.current < 0) ind.current = 2;
    setRender(!render);
  }

  return (
    <main className="flex flex-col md:flex-row h-fit md:h-[66%] w-screen">
      {/* left */}
      <div className="relative w-full md:w-[58%] md:h-full h-[375px]">
        <Image fill={true} src={IMGTXT[ind.current].dskimg} alt="furniture" />
        {/* chevrons mobile */}
        <div className="block md:hidden absolute right-0 bottom-0">
          <Chevrons inc={increment} dec={decrement} />
        </div>
      </div>

      {/* right */}
      <div className="relative w-full h-fit md:h-full md:w-[52%]">
        {/* chevrons desktop*/}
        <div className="hidden md:block absolute left-0 bottom-0">
          <Chevrons inc={increment} dec={decrement} />
        </div>

        {/* right */}
        <div className="p-10 md:p-32 text-lg ">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {IMGTXT[ind.current].title}
          </h1>
          <p className="text-gray-500 a">{IMGTXT[ind.current].content}</p>
          <div className="flex mt-10">
            <Link href="/shop">
              <p className="tracking-[1rem] mr-6">SHOP NOW</p>
            </Link>
            <Image src={arrow} alt="buy" width={40} height={10} />
          </div>
        </div>
      </div>
    </main>
  );
}
