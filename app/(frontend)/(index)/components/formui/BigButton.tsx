const BigButton: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <button className="bg-[#CB2B28] rounded-[7px] h-[44px] w-[178px] text-center flex items-center justify-center text-white text-[20px] font-semibold mb-[20px]">
      {children}
    </button>
  );
};

export default BigButton;
