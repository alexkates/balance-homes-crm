import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import { TodoProps } from "../../components/Todo";
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

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <Layout>
      <div>
        <p>By {props?.user?.name || "Unknown author"}</p>
        <p>{props.content}</p>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Todo;
