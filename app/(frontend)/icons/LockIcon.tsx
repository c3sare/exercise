import Image, { ImageProps } from "next/image";

type LockIconProps = Omit<
  ImageProps,
  "src" | "alt" | "width" | "height" | "priority" | "quality"
>;

const LockIcon: React.FC<LockIconProps> = (props) => (
  <Image
    src="/images/icons/lock-icon.png"
    alt="Koszyk"
    width={13}
    height={13}
    priority
    quality={100}
    className="opacity-50"
    {...props}
  />
);
export default LockIcon;
