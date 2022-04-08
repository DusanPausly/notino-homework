import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import getTodoList from "../api/todo";
import { TodoItem } from "../types/todo";
import Todo from "./Todo";

const Container = styled.div`
  display: block;
  align-items: center;
  margin: 2rem;
  border: 1px solid black;
  text-align: center;
  width: 50%;
  min-width: 10rem;
`;

const TodoList = () => {
  // fetch data directly or by using context
  // const { todoIsLoading, todos } = useContext(TodoContext);
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

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <>
      {!todoIsLoading ? (
        <Container>
          {todos
            ? todos.map((todo) => <Todo todo={todo} key={todo.id} />)
            : "No data"}
        </Container>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default TodoList;
