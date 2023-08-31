import { Button, Card, css } from "@mui/material";
import { TodoItemProps } from "./TodoItem.types";

export const TodoItem = ({
  content,
  onClick,
}: TodoItemProps) => {
  return (
    <Card
      className="TodoItem"
      css={css`
        width: 100%;
      `}
    >
      <Button
        variant="text"
        onClick={onClick}
        css={css`
          width: 100%;
        `}
      >
        { content }
      </Button>
    </Card>
  );
};
