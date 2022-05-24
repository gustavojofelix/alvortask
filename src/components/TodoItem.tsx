import React from "react";
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import { Todo } from "../Model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="todo-item">
      <span className="todo-item-text">{todo.todo}</span>
      <div className="todo-item-icons">
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiOutlineCheck />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
      </div>
    </form>
  );
};

export default TodoItem;
