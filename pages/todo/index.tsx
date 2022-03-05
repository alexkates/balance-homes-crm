import React from "react";
import { GetStaticProps } from "next";
import TodoItem, { TodoItemProps } from "../../components/TodoItem";
import prisma from "../../lib/prisma";
import CreateTodo from "../../components/CreateTodo";

export const getStaticProps: GetStaticProps = async () => {
  const todos = await prisma.todo.findMany({
    orderBy: {
      id: "desc",
    },
    include: {
      user: {
        select: { name: true },
      },
    },
  });

  return { props: { todos } };
};

type ListTodoProps = {
  todos: TodoItemProps[];
};

const ListTodos: React.FC<ListTodoProps> = ({ todos }: ListTodoProps) => {
  return (
    <div>
      <CreateTodo />
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
