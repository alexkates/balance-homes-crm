import prisma from "../../../lib/prisma";

// POST /api/customer
export default async function handle(req, res) {
  const result = await prisma.customer.upsert({
    where: {
      id: req.body.id || -1,
    },
    update: req.body,
    create: req.body,
  });
  res.json(result);
}
