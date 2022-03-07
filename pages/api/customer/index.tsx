import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;

  switch (method) {
    case "POST":
      const customer = await prisma.customer.create({
        data: body,
      });
      res.status(200).json({ id: customer.id });
      break;

    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
