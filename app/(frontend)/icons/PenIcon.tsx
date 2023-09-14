import Image, { ImageProps } from "next/image";

type PenIconProps = Omit<
  ImageProps,
  "src" | "alt" | "width" | "height" | "priority" | "quality"
>;

const PenIcon: React.FC<PenIconProps> = (props) => (
  <Image
    src="/images/icons/pen-icon.png"
    alt="Koszyk"
    width={36}
    height={30}
    priority
    quality={100}
    {...props}
  />
);
export default PenIcon;
