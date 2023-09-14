import Image from "next/image";
import ArrowRightIcon from "../../icons/ArrowRightIcon";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon";
import ScrollIcon from "../../icons/ScrollIcon";
import LockIcon from "../../icons/LockIcon";

const Preview = () => {
  return (
    <div className="w-full h-[143px] rounded-[9px] overflow-hidden bg-[rgba(227, 228, 231, 0.22)] flex shadow-lg mb-[27px]">
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
          <ArrowLeftIcon />
        </button>
      </div>
      <div className="w-1/2 h-full flex flex-row justify-center items-center relative bg-[#F7F7F8]">
        <div>
          <ScrollIcon />
        </div>
        <div className="flex flex-col items-center justify-evenly h-full">
          <span className="font-semibold text-[14px]">MINIMALISTIC</span>
          <div className="flex items-center">
            <button className="bg-[#CB2B28] rounded-[7px] w-[125px] h-[43px] flex justify-center items-center text-white shadow-[rgba(64,_53,_53,_0.49)] shadow-[4px_4px_10px_0px_rgba(64,_53,_53,_0.49)_inset]">
              CARTOON
            </button>
          </div>
          <button className="flex items-center justify-center drop-shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            <LockIcon />
            <span className="text-[#C0C1C9] raleway font-semibold textStroke">
              ARTISTIC
            </span>
          </button>
          <button className="absolute top-[15px] right-3">
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
