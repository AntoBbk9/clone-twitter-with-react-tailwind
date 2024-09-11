import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  size: "primary" | "secondary";
}

function Button({ children, size }: Props) {
  const sizeStyles = size === 'primary' 
  ? "w-48"
  : "w-24"
  return (
    <button
      className={`hidden sm:block md:block lg:block text-xs font-bold h-12 rounded-full bg-blue text-white ${sizeStyles}`}
    >
      {children}
    </button>
  );
}

export default Button;
