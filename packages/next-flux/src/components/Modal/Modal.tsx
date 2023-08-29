import { Dialog, css } from "@mui/material";
import { ModalProps } from "./Modal.types";
import clsx from "clsx";
import { CloseButton } from "./CloseButton";

export const Modal = ({
  className,
  children,
  footerChildren,
  onClose,
  ...others
}: ModalProps) => {
  return (
    <Dialog
      className={clsx(
        'Modal',
        className,
      )}
      css={css`
        .MuiDialog-paper {
          display: flex;
          flex-direction: column;
          max-width: 400px;
          min-height: 250px;
          width: 100%;
        }
      `}
      { ...others }
    >
      <div
        className="Modal__Header"
        css={css`
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 8px 16px;
        `}
      >
        <CloseButton
          onClick={(event) => onClose?.(event, 'escapeKeyDown')}
        ></CloseButton>
      </div>
      <div
        className="Modal__Content"
        css={css`
          flex: auto;
          padding: 0 16px;
        `}
      >
        { children }
      </div>
      <div
        className="Modal__Footer"
        css={css`
          display: flex;
          align-items: center;
          padding: 8px 16px;
        `}
      >
        { footerChildren }
      </div>
    </Dialog>
  );
};
