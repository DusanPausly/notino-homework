import { TodoItem } from "../types/todo";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  todo: TodoItem;
}

const ListItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid;
  :last-child {
    border-bottom: none;
  }
  :hover {
    background-color: red;
  }
`;

const Todo = ({ todo }: Props) => {
  const router = useRouter();

  return (
    <ListItem
      onClick={() => {
        router.push({
          pathname: "/details/[id]",
          query: { id: todo.id },
        });
      }}
    >
      {todo.title}
    </ListItem>
  );
};

export default Todo;
