import { DialogProps } from "@mui/material";
import { ReactNode } from "react";

export interface ModalProps extends DialogProps {
  footerChildren?: ReactNode;
}