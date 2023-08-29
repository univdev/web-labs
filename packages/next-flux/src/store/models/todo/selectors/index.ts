import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "~/store/index.types";
import { TodoModelAdapter } from "..";

export const TodoSelector = TodoModelAdapter.getSelectors();

export const TodoItemsSelector = (state: AppState) => TodoSelector.selectAll(state.todo);