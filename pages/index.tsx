import React from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Todo, { TodoProps } from "../components/Todo";
import prisma from "../lib/prisma";

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
  todos: TodoProps[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Todos</h1>
        <main>
          {props.todos.map((todo) => (
            <div key={todo.id} className="todo">
              <Todo todo={todo} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .todo {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .todo:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .todo + .todo {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Blog;
