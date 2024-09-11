import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
}

function ButtonMobile({ children }: Props) {
  return (
    <button
      className={`block sm:hidden items-center justify-center text-xs font-bold w-12 h-12 rounded-full bg-blue text-white`}>
      {children}
    </button>
  );
}

export default ButtonMobile;