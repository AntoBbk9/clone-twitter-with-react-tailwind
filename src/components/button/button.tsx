import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
}

function Button({ children }: Props) {
  return (
    <button
      className={`hidden sm:block md:block lg:block text-xs font-bold w-36 h-10 rounded-full bg-blue text-white`}
    >
      {children}
    </button>
  );
}

export default Button;
