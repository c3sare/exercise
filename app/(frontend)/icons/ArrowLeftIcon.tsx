import Image, { ImageProps } from "next/image";

type ArrowLeftIconProps = Omit<
  ImageProps,
  "src" | "alt" | "width" | "height" | "priority" | "quality"
>;

const ArrowLeftIcon: React.FC<ArrowLeftIconProps> = (props) => (
  <Image
    src="/images/icons/arrow-left-icon.png"
    alt="Koszyk"
    width={12}
    height={19}
    priority
    quality={100}
    {...props}
  />
);
export default ArrowLeftIcon;
