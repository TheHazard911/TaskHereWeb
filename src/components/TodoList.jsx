import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo
}) => {
  return (
    <ul className="task-border list-group list-group-flush">
      {todos.map(todo =>
        <TodoItem
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      )}
    </ul>
  );
};
