import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  size: "primary" | "secondary";
}

function ButtonMobile({ children, size  }: Props) {
  const sizeStyles = size === 'primary' 
  ? "w-12 h-12"
  : "w-20 h-8"
  return (
    <button
      className={`block lg:hidden items-center justify-center text-xs font-bold ${sizeStyles} rounded-full bg-blue text-white`}>
      {children}
    </button>
  );
}

export default ButtonMobile;