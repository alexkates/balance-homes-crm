import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { PrismaClient } from "@prisma/client";
import AnchorButton from "../../components/AnchorButton";
import CustomerTable from "../../components/customer/CustomerTable";

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient();
  const customers = await prisma.customer.findMany();
  const statuses = await prisma.status.findMany();

  return { props: { customers, statuses } };
};

export default function ({
  customers,
  statuses,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <div className="flex">
        <h1 className="text-2xl mr-4">Customers</h1>
        <AnchorButton href="/customer/create">Create</AnchorButton>
      </div>

      <div className="mt-4">
        <CustomerTable customers={customers} statuses={statuses} />
      </div>
    </main>
  );
}
