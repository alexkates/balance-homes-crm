import { Customer } from "@prisma/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import CustomerItem from "../../components/customer/CustomerItem";
import { PrismaClient } from "@prisma/client";

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient();
  const statuses = await prisma.status.findMany();

  return { props: { statuses } };
};

export default function ({
  statuses,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <CustomerItem statuses={statuses} />
    </main>
  );
}
