import Image, { ImageProps } from "next/image";

type CartIconProps = Omit<
  ImageProps,
  "src" | "alt" | "width" | "height" | "priority" | "quality"
>;

const CartIcon: React.FC<CartIconProps> = (props) => (
  <Image
    src="/images/icons/cart-icon.png"
    alt="Koszyk"
    width={37}
    height={25}
    priority
    quality={100}
    {...props}
  />
);
export default CartIcon;
