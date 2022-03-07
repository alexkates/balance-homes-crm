import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    body,
    method,
    query: { id },
  } = req;

  switch (method) {
    case "PATCH":
      const customerToUpdate = await prisma.customer.findFirst({
        where: {
          id: parseInt(id as string),
        },
      });

      if (!customerToUpdate) {
        res.status(404).send("Customer not found");
      }

      const updatedCustomer = await prisma.customer.update({
        where: {
          id: customerToUpdate.id,
        },
        data: body,
      });

      res.status(200).json({ id: updatedCustomer.id });
      break;

    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
