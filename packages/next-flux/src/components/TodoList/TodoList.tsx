import clsx from "clsx";
import { TodoListProps } from "./TodoList.types";
import { TodoItem } from "./TodoItem";
import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const TodoList = ({
  items,
  onClickTodoItem,
}: TodoListProps) => {
  const [list] = useAutoAnimate();

  return (
    <ul
      ref={list}
      className={clsx('TodoList')}
      css={css`
        padding: 0;
        margin: 0;
        list-style: none;
      `}
    >
      {
        items.map((item) => {
          const {
            id,
            content,
          } = item;

          return (
            <li
              key={id}
              className="TodoList__Item"
              css={css`
                margin-bottom: 8px;
                &:last-of-type {
                  margin-bottom: 0;
                }
              `}
            >
              <TodoItem
                content={content}
                onClick={() => onClickTodoItem?.(item)}
              ></TodoItem>
            </li>
          );
        })
      }
    </ul>
  );
};