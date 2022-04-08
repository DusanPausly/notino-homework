import { TodoItem } from "../types/todo";
import TodoListMock from "./todo.mock";

const getTodoList = async (): Promise<TodoItem[]> => {
  try {
    // const response = fetch("./todo.mock");
    // return (await response).json();
    return TodoListMock;
  } catch (error) {
    return [];
  }
};

export default getTodoList;
