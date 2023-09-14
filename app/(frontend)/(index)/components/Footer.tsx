import Image from "next/image";
import BigButton from "./formui/BigButton";
import Banner from "./formui/Banner";
import RightArrowIcon from "../../icons/RightArrowIcon";
import { useState } from "react";

const Footer = () => {
  const [boxes, setBoxes] = useState<React.ReactNode>(null);

  const handleGenerateBoxes = () => {
    const url = "http://colormind.io/api/";
    const data = {
      model: "default",
    };

    const http = new XMLHttpRequest();

    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        const palette = JSON.parse(http.responseText).result;
        setBoxes(
          <div className="h-full w-full absolute top-0 left-0 flex flex-col gap-[8px]">
            {palette.map((colors: any) => {
              return (
                <div
                  className="h-1/5 w-full"
                  style={{
                    backgroundColor: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`,
                  }}
                />
              );
            })}
          </div>
        );
      }
    };

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
  };

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
      <BigButton onClick={handleGenerateBoxes}>GENERATE</BigButton>
    </footer>
  );
};

export default Footer;
