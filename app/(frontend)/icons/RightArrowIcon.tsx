import Image, { ImageProps } from "next/image";

type RightArrowIconProps = Omit<
  ImageProps,
  "src" | "alt" | "width" | "height" | "priority" | "quality"
>;

const RightArrowIcon: React.FC<RightArrowIconProps> = (props) => (
  <Image
    src="/images/icons/right-arrow-icon.png"
    alt="Koszyk"
    width={15}
    height={15}
    priority
    quality={100}
    {...props}
  />
);
export default RightArrowIcon;
