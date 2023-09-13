import Image from "next/image";
import { MdArrowBack } from "@react-icons/all-files/md/MdArrowBack";
import { AiFillLock } from "@react-icons/all-files/ai/AiFillLock";
import { IoHandLeftOutline } from "@react-icons/all-files/io5/IoHandLeftOutline";

const Preview = () => {
  return (
    <div className="w-full h-[143px] rounded-[9px] overflow-hidden bg-[rgba(227,_228,_231,_0.22)] flex shadow-lg">
      <div className="w-1/2 h-full relative flex flex-col items-center justify-center bg-white">
        <span className="text-[#2E2727] text-center text-[13px] font-semibold">
          Style preview
        </span>
        <Image
          src="/images/boy.svg"
          alt="Guitar boy"
          height={100}
          width={103}
        />
        <button className="absolute top-[15px] left-3">
          <MdArrowBack />
        </button>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center">
        <span className="my-3 font-semibold text-[14px]">MINIMALISTIC</span>
        <div className="flex items-center">
          <IoHandLeftOutline className="text-[28px]" />
          <button className="bg-[#CB2B28] rounded-[7px] w-[125px] h-[43px] flex justify-center items-center text-white shadow-[rgba(64,_53,_53,_0.49)] shadow-[4px_4px_10px_0px_rgba(64,_53,_53,_0.49)_inset]">
            CARTOON
          </button>
        </div>
        <button className="flex items-center justify-center">
          <AiFillLock className="text-gray-300" />
          <span className="text-black drop-shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            ARTISTIC
          </span>
        </button>
      </div>
    </div>
  );
};

export default Preview;
