import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(prisma: PrismaClient) {
  const applicationSubmittedStatus = await prisma.status.findMany();

  const statusesToCreate = [
    "Application Submitted",
    "Application Accepted",
    "Application Rejected",
  ];

  for (const status of statusesToCreate) {
    if (!applicationSubmittedStatus.find((s) => s.name === status)) {
      const createdStatus = await prisma.status.create({
        data: {
          name: status,
        },
      });

      console.log(
        `Created status: ${createdStatus.name} with id: ${createdStatus.id}`
      );
    }
  }
}

main(prisma)
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
