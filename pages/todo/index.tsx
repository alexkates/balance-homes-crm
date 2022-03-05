import React from "react";
import { GetStaticProps } from "next";
import TodoItem, { TodoItemProps } from "../../components/TodoItem";
import prisma from "../../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const todos = await prisma.todo.findMany({
    include: {
      user: {
        select: { name: true },
      },
    },
  });
  return { props: { todos } };
};

type Props = {
  todos: TodoItemProps[];
};

const ListTodos: React.FC<Props> = ({ todos }: Props) => {
  return (
    <div>
      <h1>Todos</h1>
      <main>
        {todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem todo={todo} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default ListTodos;
