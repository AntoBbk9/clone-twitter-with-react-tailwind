import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  size: "primary" | "secondary";
  color: "blue" | "white"
}

function Button({ children, size, color }: Props) {
  const sizeStyles = size === 'primary' 
  ? "w-48"
  : "w-20"

  const variantColor = color === 'blue' ? "bg-blue text-white" : "bg-white text-black"
  return (
    <button
      className={`hidden lg:block text-xs font-bold h-8 rounded-full ${variantColor} ${sizeStyles}`}
    >
      {children}
    </button>
  );
}

export default Button;
