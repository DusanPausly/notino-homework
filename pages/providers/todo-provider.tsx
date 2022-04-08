import React, { useCallback, useEffect, useState } from "react";
import getTodoList from "../api/todo";
import { TodoItem } from "../types/todo";
import TodoContext from "./context/todoContext";

interface Props {
  children: React.ReactNode;
}

const TodoProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [todoIsLoading, setTodoIsLoading] = useState(true);

  const fetchTodos = useCallback(async () => {
    setTodoIsLoading(true);
    const res = await getTodoList();
    if (res) {
      setTodos(res);
    }
    setTodoIsLoading(false);
  }, []);

  const getTodoDetails = (id?: string) => todos.find((item) => item.id === id);

  // fetch data by using context
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <TodoContext.Provider
      value={{
        fetchTodos,
        getTodoDetails,
        todoIsLoading,
        todos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
