import { MouseEventHandler } from "react";
import { ButtonProps } from "@mui/material";

export interface AddButtonProps extends ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}