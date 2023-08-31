import { NextComponentType, NextPageContext } from "next";
import { AppProps } from "next/app";
import { ReactNode } from "react";

export interface AppPropsWithLayout extends AppProps {
  Component: NextComponentType<NextPageContext, any, any> & { getLayout: (page: ReactNode) => ReactNode }
};
