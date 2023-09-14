import Image, { ImageProps } from "next/image";

type UserIconProps = Omit<
  ImageProps,
  "src" | "alt" | "width" | "height" | "priority" | "quality"
>;

const UserIcon: React.FC<UserIconProps> = (props) => (
  <Image
    src="/images/icons/user-icon.png"
    alt="Koszyk"
    width={26}
    height={25}
    priority
    quality={100}
    {...props}
  />
);
export default UserIcon;
