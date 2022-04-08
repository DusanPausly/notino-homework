import React from "react";
import { TodoItem } from "../../types/todo";

interface TodoContextParams {
  fetchTodos(): Promise<void>;
  todoIsLoading: boolean;
  todos: TodoItem[];
  getTodoDetails: (id?: string) => TodoItem | undefined;
}

export const defaultTodoContext = {
  fetchTodos: () => Promise.resolve(),
  getTodoDetails: () => undefined,
  todoIsLoading: true,
  todos: [],
};

const TodoContext = React.createContext<TodoContextParams>(defaultTodoContext);

export default TodoContext;
