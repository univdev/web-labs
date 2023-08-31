import { type Ref, forwardRef } from "react";
import { ButtonProps } from "./Button.types";

export const Button = forwardRef(({
  id,
  className,
  children,
  type = 'button',
  onClick,
  onClickCapture,
  nativeProps: nativeDirectives,
}: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  return (
    <button
      ref={ref}
      id={id}
      className={className}
      type={type}
      onClick={onClick}
      onClickCapture={onClickCapture}
      { ...nativeDirectives }
    >
      { children }
    </button>
  );
});

export default Button;
