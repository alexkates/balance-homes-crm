import React from "react";
import { GetServerSideProps } from "next";
import { TodoItemProps } from "../../components/TodoItem";
import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const todo = await prisma.todo.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      user: {
        select: { name: true },
      },
    },
  });
  return {
    props: todo,
  };
};

const TodoItem: React.FC<TodoItemProps> = (todo) => {
  return (
    <div>
      <p>By {todo?.user?.name || "Unknown author"}</p>
      <p>{todo.content}</p>
    </div>
  );
};

export default TodoItem;
