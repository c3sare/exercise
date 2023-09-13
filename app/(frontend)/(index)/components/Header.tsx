import Image from "next/image";

const Header = () => {
  return (
    <div>
      <Image
        className="mx-auto"
        src="/images/logo.png"
        width={284}
        height={52}
        alt="Logo"
      />
      <p className="w-[349px] my-4 text-center leading-[23px] text-[21px] mx-auto">
        Generate your ART
        <br />
        by typing in field below any words
        <br />
        that comes to you mind!
      </p>
    </div>
  );
};

export default Header;
