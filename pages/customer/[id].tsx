import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import CustomerItem from "../../components/customer/CustomerItem";
import { PrismaClient } from "@prisma/client";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const prisma = new PrismaClient();
  const statuses = await prisma.status.findMany();
  const customer = await prisma.customer.findFirst({
    where: {
      id: parseInt(params.id as string),
    },
  });

  return { props: { customer, statuses } };
};

export default function ({
  customer,
  statuses,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <CustomerItem customer={customer} statuses={statuses} />
    </main>
  );
}
