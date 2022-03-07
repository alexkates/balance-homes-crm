import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import CustomerItem from "../../components/customer/CustomerItem";
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
      <CustomerItem customer={customer} />
    </main>
  );
}
