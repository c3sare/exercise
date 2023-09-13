import { FiArrowRight } from "@react-icons/all-files/fi/FiArrowRight";
import Image from "next/image";
import BigButton from "./formui/BigButton";
import Banner from "./formui/Banner";

const Footer = () => {
  return (
    <footer className="flex items-center flex-col my-4 gap-2">
      <span className="text-[#CB2B28] text-center text-[20px] font-bold uppercase">
        GET INSPIRED!
      </span>
      <span className="text-black text-center text-[20px] font-medium">
        BEST USERS DESIGNS
      </span>
      <button className="text-[#1e1e1e] text-center text-[18px] font-semibold flex items-end">
        See More <FiArrowRight className="text-[22px]" />
      </button>
      <Image
        src="/images/footer.png"
        alt="Footer Image"
        width={225}
        height={209}
      />
      <Banner />
      <BigButton>BUY</BigButton>
    </footer>
  );
};

export default Footer;
