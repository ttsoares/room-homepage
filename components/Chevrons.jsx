import Image from "next/image";
import left from "/public/icon-angle-left.svg";
import right from "/public/icon-angle-right.svg";

const Chevrons = ({ inc, dec }) => {
  return (
    <div className={`flex`}>
      <div
        className={`bg-black hover:bg-slate-600 px-8 py-4 w-24 h-20`}
        onClick={dec}
      >
        <Image src={left} width={30} height={30} alt="left" className="p-2" />
      </div>

      <div
        className={`bg-black hover:bg-slate-600 px-8 py-4 w-24 h-20`}
        onClick={inc}
      >
        <Image src={right} width={30} height={30} alt="right" className="p-2" />
      </div>
    </div>
  );
};

export default Chevrons;
