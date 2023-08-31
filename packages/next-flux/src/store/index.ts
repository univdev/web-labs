import { configureStore } from "@reduxjs/toolkit";
import { TodoModel, TodoModelName } from "./models/todo";
import { AppDispatch, AppState } from "./index.types";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [TodoModelName]: TodoModel.reducer,
  }
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
