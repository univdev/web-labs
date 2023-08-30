import { ReactNode } from 'react';

export interface DefaultComponentProps {
  id?: string;
  className?: string;
  style?: string;
}

export interface ParentComponentProps {
  children?: ReactNode;
}

export interface AllowNativeDirectiveComponentProps {
  nativeProps?: {
    [directive: string]: any;
  };
}
