import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { CloseButtonProps } from "./CloseButton.types";

export const CloseButton = ({ ...others }: CloseButtonProps) => {
  return (
    <Button
      variant="contained"
      { ...others }
    >
      <Close></Close>
    </Button>
  );
};
