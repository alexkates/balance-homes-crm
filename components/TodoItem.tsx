import React from "react";

export type TodoItemProps = {
  id: number;
  user: {
    name: string;
    email: string;
  } | null;
  content: string;
};

const TodoItem: React.FC<{ todo: TodoItemProps }> = ({ todo }) => {
  const userName = todo.user ? todo.user.name : "Unknown user";
  return (
    <div>
      <small>By {userName}</small>
      <p>{todo.content} </p>
    </div>
  );
};

export default TodoItem;
