import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import prisma from "../../lib/prisma";
import AnchorButton from "../../components/AnchorButton";
import CustomerTable from "../../components/customer/CustomerTable";

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
      <div className="flex">
        <h1 className="text-2xl mr-4">Customers</h1>
        <AnchorButton href="/customer/create">Create</AnchorButton>
      </div>

      <div className="mt-4">
        <CustomerTable customers={customers} />
      </div>
    </main>
  );
}
