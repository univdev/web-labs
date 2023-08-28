import { configureStore } from "@reduxjs/toolkit";
import { TodoModel, TodoModelName } from "./models/todo";

export const store = configureStore({
  reducer: {
    [TodoModelName]: TodoModel.reducer,
  }
});
