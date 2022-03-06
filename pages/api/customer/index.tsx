import prisma from "../../../lib/prisma";

// POST /api/customer
export default async function handle(req, res) {
  const result = await prisma.customer.create({
    data: req.body,
  });
  res.json(result);
}
