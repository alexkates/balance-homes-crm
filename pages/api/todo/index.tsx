import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// POST /api/todo
export default async function handle(req, res) {
  const { content } = req.body;

  const session = await getSession({ req });
  const result = await prisma.todo.create({
    data: {
      content: content,
      user: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}
