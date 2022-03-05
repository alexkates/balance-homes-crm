import React from "react";
import Router from "next/router";

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
    <div onClick={() => Router.push("/todo/[id]", `/todo/${todo.id}`)}>
      <small>By {userName}</small>
      <p>{todo.content} </p>
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default TodoItem;
