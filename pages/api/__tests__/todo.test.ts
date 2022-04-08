import "@testing-library/jest-dom/extend-expect";
import getTodoList from "../todo";
import TodoListMock from "../todo.mock";

describe("Todo functions", () => {
  test("getTodoList", async () => {
    const value = await getTodoList();
    expect(value).toEqual(TodoListMock);
  });
});
