const Banner = () => {
  return (
    <div className="flex rounded-[9px] w-full h-[45px] relative bg-[#E5E5E7] pl-[14px]">
      <div className="w-full h-full flex items-center">punk heart, gothic</div>
      <div
        className="rounded-[0px_9px_9px_0px] h-full w-[96px] absolute right-0 top-0 flex justify-center items-center raleway"
        style={{
          background:
            "linear-gradient(180deg, #CFCFD0 0%, rgba(207, 207, 208, 0.00) 100%)",
        }}
      >
        ARTISTIC
      </div>
    </div>
  );
};

export default Banner;
