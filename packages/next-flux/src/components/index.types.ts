import { CSSProperties, ReactNode } from "react";

export interface DefaultComponentProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
}

export interface ParentComponentProps {
  children?: ReactNode;
}

export interface NativeComponentProps {
  props?: Object;
}