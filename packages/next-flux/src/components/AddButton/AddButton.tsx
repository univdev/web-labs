import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { AddButtonProps } from "./AddButton.types";
import clsx from "clsx";

export const AddButton = ({
  id,
  className,
  onClick,
  onClickCapture,
}: AddButtonProps) => {
  return (
    <Button
      id={id}
      className={clsx(
        'AddButton',
        className,
      )}
      variant="contained"
      onClick={onClick}
      onClickCapture={onClickCapture}
    >
      <Add></Add>
    </Button>
  );
};
