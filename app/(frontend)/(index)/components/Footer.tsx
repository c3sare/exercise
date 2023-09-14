import Image from "next/image";
import BigButton from "./formui/BigButton";
import Banner from "./formui/Banner";
import RightArrowIcon from "../../icons/RightArrowIcon";

const Footer = () => {
  return (
    <footer className="flex items-center flex-col gap-[3px] p-[8px] bg-[rgba(227,_228,_231,_0.26)] rounded-[9px] mb-[3px]">
      <span className="text-[#CB2B28] text-center text-[20px] font-bold uppercase">
        GET INSPIRED!
      </span>
      <span className="text-black text-center text-[20px] font-medium">
        BEST USERS DESIGNS
      </span>
      <button className="text-[#1e1e1e] text-center text-[18px] font-semibold flex items-end gap-[7px]">
        <span>See More</span>
        <RightArrowIcon />
      </button>
      <Image
        src="/images/footer.png"
        alt="Footer Image"
        width={225}
        height={209}
        className="mb-[7px]"
      />
      <Banner />
      <BigButton>BUY</BigButton>
    </footer>
  );
};

export default Footer;
