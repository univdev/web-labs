import { Button, css } from "@mui/material";
import { FooterProps } from "./Footer.types";
import { Check, Close } from "@mui/icons-material";

export const Footer = ({
  onConfirm,
  onCancel,
}: FooterProps) => {
  return (
    <div
      className="Footer"
      css={css`
        width: 100%;
        display: flex;
        align-items: center;
        justify-items: flex-end;
      `}
    >
      <Button
        variant="contained"
        color="error"
        onClick={onCancel}
      >
        <Close></Close>
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={onConfirm}
        css={css`
          margin-left: 8px;
        `}
      >
        <Check></Check>
      </Button>
    </div>
  );
};
