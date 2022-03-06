import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import CreateCustomer from "../../components/customer/CreateCustomer";
import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const customer = await prisma.customer.findFirst({
    where: {
      id: parseInt(params.id as string),
    },
  });

  return { props: { customer } };
};

export default function ({
  customer,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <CreateCustomer customer={customer} />
    </main>
  );
}
