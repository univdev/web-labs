import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { ParentComponentProps, type DefaultComponentProps, AllowNativeDirectiveComponentProps } from '../index';

export type NativeButtonProps =
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface ButtonProps
  extends
    Pick<NativeButtonProps, 'type' | 'onClick' | 'onClickCapture'>,
    DefaultComponentProps, ParentComponentProps,
    AllowNativeDirectiveComponentProps {
}
