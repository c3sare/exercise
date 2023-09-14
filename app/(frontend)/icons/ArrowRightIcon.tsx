import Image, { ImageProps } from "next/image";

type ArrowRightIconProps = Omit<
  ImageProps,
  "src" | "alt" | "width" | "height" | "priority" | "quality"
>;

const ArrowRightIcon: React.FC<ArrowRightIconProps> = (props) => (
  <Image
    src="/images/icons/arrow-right-icon.png"
    alt="Koszyk"
    width={12}
    height={19}
    priority
    quality={100}
    {...props}
  />
);
export default ArrowRightIcon;
