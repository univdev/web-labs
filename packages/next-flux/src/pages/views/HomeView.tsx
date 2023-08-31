import { Button, Icon, css } from "@mui/material";
import { HomeViewProps } from "./HomeView.types";
import AddIcon from '@mui/icons-material/Add';
import { AddButton } from "~/components/AddButton/AddButton";
import { useState } from "react";
import { TodoEditModal } from "~/components/TodoEditModal/TodoEditModal";
import { useAppDispatch, useAppSelector } from "~/store";
import { TodoItemsSelector } from "~/store/models/todo/selectors";
import { TodoModel } from "~/store/models/todo";
import uuid from "react-uuid";
import { TodoList } from "~/components/TodoList/TodoList";
import { TodoItem } from "~/store/models/todo/index.types";

export default function HomeView({}: HomeViewProps) {
  const dispatch = useAppDispatch();
  const todoItems = useAppSelector(TodoItemsSelector);
  const [isOpenTodoAppendModal, setIsOpenTodoAppendModal] = useState(false);
  const [selectedTodoItem, setSelectedTodoItem] = useState<TodoItem>();

  const appendTodoItem = ({ content, isDone }: { content: string, isDone: boolean }) => {
    const id = uuid();

    dispatch(TodoModel.actions.addOne({ id, content, isDone }));
  };

  const updateTodoItem = ({ id, content, isDone }: { id: string, content: string, isDone: boolean }) => {
    dispatch(TodoModel.actions.setOne({ id, content, isDone }));
  }

  const selectTodoItem = (item: TodoItem) => {
    setSelectedTodoItem(item);
  };

  return (
    <div
      className="HomeView"
      css={css`
        position: relative;
      `}
    >
      <TodoList
        items={todoItems}
        onClickTodoItem={selectTodoItem}
      ></TodoList>

      {/* 할 일 추가 Modal */}
      <TodoEditModal
        show={isOpenTodoAppendModal}
        onClose={() => setIsOpenTodoAppendModal(false)}
        onConfirm={appendTodoItem}
      />

      {/* 할 일 수정 Modal */}
      <TodoEditModal
        show={Boolean(selectedTodoItem)}
        initialContent={selectedTodoItem?.content}
        initialIsDone={selectedTodoItem?.isDone}
        onClose={() => setSelectedTodoItem(undefined)}
        onConfirm={(item) => selectedTodoItem && updateTodoItem({ id: selectedTodoItem?.id, ...item })}
      ></TodoEditModal>

      <AddButton
        css={css`
          position: fixed;
          right: 32px;
          bottom: 32px;
        `}
        onClick={() => setIsOpenTodoAppendModal(true)}
      ></AddButton>
    </div>
  );
}