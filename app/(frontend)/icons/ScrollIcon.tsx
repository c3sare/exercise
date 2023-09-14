import Image, { ImageProps } from "next/image";

type ScrollIconProps = Omit<
  ImageProps,
  "src" | "alt" | "width" | "height" | "priority" | "quality"
>;

const ScrollIcon: React.FC<ScrollIconProps> = (props) => (
  <Image
    src="/images/icons/scroll-icon.png"
    alt="Koszyk"
    width={28}
    height={28}
    priority
    quality={100}
    {...props}
  />
);
export default ScrollIcon;
