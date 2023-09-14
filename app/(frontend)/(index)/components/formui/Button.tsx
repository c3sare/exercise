import clsx from "clsx";
import { ButtonHTMLAttributes, HTMLAttributes } from "react";

type ButtonProps = {
  children?: React.ReactNode;
  className?: HTMLAttributes<HTMLButtonElement>["className"];
  onClick?: HTMLAttributes<HTMLButtonElement>["onClick"];
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type,
}) => {
  return (
    <button
      className={clsx(
        "rounded-[7px] bg-[#CB2B28] text-[30px] text-[#f1f1f1] flex justify-center items-center",
        className
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
