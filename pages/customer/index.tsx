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
      <Link href="/customer/create">
        <a>Create</a>
      </Link>
      <CustomerList customers={customers} />
    </main>
  );
}
