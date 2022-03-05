import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// POST /api/customer
export default async function handle(req, res) {
  const { name } = req.body;

  const session = await getSession({ req });
  const result = await prisma.customer.create({
    data: {
      name,
      user: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}
