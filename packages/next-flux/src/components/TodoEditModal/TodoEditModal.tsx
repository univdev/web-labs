import { Checkbox, Dialog, TextField, css } from "@mui/material";
import { TodoEditModalProps } from "./TodoEditModal.types";
import { Modal } from "../Modal/Modal";
import { useEffect, useState } from "react";
import { Footer } from "./Footer";

export const TodoEditModal = ({
  initialContent = '',
  initialIsDone = false,
  show = false,
  closeClear = true,
  onCancel,
  onClose,
  onConfirm,
}: TodoEditModalProps) => {
  const [content, setContent] = useState(initialContent);
  const [isDone, setIsDone] = useState(initialIsDone);

  useEffect(() => setContent(initialContent), [initialContent]);
  useEffect(() => setIsDone(initialIsDone), [initialIsDone]);

  const closeEvent = () => {
    if (closeClear) {
      setContent('');
      setIsDone(false);
    }
    onClose?.();
  };

  return (
    <Modal
      open={show}
      onClose={() => closeEvent()}
      footerChildren={(
        <Footer
          onCancel={() => {
            onCancel?.();
            closeEvent();
          }}
          onConfirm={() => {
            onConfirm?.({ content, isDone });
            closeEvent();
          }}
        ></Footer>
      )}
    >
      <TextField
        value={content}
        label="Todo"
        variant="standard"
        onChange={(event) => setContent(event.target.value)}
        css={css`
          width: 100%;
        `}
      ></TextField>
      <Checkbox
        checked={isDone}
        onChange={(_, isChecked) => setIsDone(isChecked)}
      ></Checkbox>
    </Modal>
  );
};
