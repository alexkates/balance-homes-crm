import { Customer } from ".prisma/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import CustomerItem from "../../components/customer/CustomerItem";
import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async () => {
  const statuses = await prisma.status.findMany();

  return { props: { statuses } };
};

export default function ({
  statuses,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <CustomerItem
        statuses={statuses}
        customer={{ statusId: 1 } as Customer}
      />
    </main>
  );
}
