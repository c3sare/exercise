import { HTMLAttributes } from "react";

type BigButtonProps = {
  onClick?: HTMLAttributes<HTMLButtonElement>["onClick"];
  children?: React.ReactNode;
};

const BigButton: React.FC<BigButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#CB2B28] rounded-[7px] h-[44px] w-[178px] text-center flex items-center justify-center text-white text-[20px] font-semibold"
    >
      {children}
    </button>
  );
};

export default BigButton;
