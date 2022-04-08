import { TodoItem } from "../types/todo";

interface Props {
  todo: TodoItem;
}

const TodoDetails = ({ todo }: Props) => {
  const handleOnClick = () => {
    window.location.href = "/detail";
  };

  return (
    <div>
      <div onClick={handleOnClick}>{todo.title}</div>
    </div>
  );
};

export default TodoDetails;
