import React from "react";
import { FaTrash } from "react-icons/fa";
import { TodoUpdate } from "./TodoUpdate";

export const TodoItem = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo
}) => {
  return (
    <li className="task-border list-group-item d-flex justify-content-between align-items-center">
      <span onClick={() => handleCompleteTodo(todo.id)}>
        <input
          className={`container-done form-control ${todo.done ? "active" : ""}`}
        />
      </span>
      <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
      <button
        className="btn btn-delete"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        <FaTrash />
      </button>
    </li>
  );
};
