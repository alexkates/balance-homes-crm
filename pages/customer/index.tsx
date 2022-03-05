import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import prisma from "../../lib/prisma";
import CustomerList from "../../components/customer/CustomerList";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async () => {
  const customers = await prisma.customer.findMany({
    orderBy: {
      id: "desc",
    },
    include: {
      user: {
        select: { name: true },
      },
    },
  });

  return { props: { customers } };
};

export default function ({
  customers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <div className="m-4 flex">
        <h1 className="text-4xl px-2">Customers</h1>
        <Link href="/customer/create">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            +
          </a>
        </Link>
      </div>

      <CustomerList customers={customers} />
    </main>
  );
}
