import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { TodoItem } from "./index.types";

export const TodoModelName = 'todo';

export const TodoModelInitialState = {
  items: [] as TodoItem[],
};

export const TodoModelAdapter = createEntityAdapter<TodoItem>({
  selectId: (item) => item.id,
});

export const TodoModel = createSlice({
  name: TodoModelName,
  initialState: TodoModelAdapter.getInitialState(),
  reducers: {
    addOne: TodoModelAdapter.addOne,
    addMany: TodoModelAdapter.addMany,
    removeAll: TodoModelAdapter.removeAll,
    removeOne: TodoModelAdapter.removeOne,
    removeMany: TodoModelAdapter.removeMany,
    setAll: TodoModelAdapter.setAll,
    setMany: TodoModelAdapter.setMany,
  },
});