import { TodoItem } from "~/store/models/todo/index.types";

export interface TodoListProps {
  items: TodoItem[];
  
  onClickTodoItem?: (item: TodoItem) => any;
}