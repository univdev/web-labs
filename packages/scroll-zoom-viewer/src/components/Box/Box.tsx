import classNames from 'classnames';
import { BoxProps } from "./Box.types";

export const Box = ({ ...others }: BoxProps) => {
  return (
    <div
      { ...others }
      className={classNames(
        'Box',
        others.className,
      )}
    ></div>
  );
};
