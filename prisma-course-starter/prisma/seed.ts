import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "An nè",
        email: "pqan112@gmail.com",
        age: 18,
        nationality: "Viet Nam",
      },
      {
        name: "An Pham",
        email: "anpham1122000@gmail.com",
        age: 30,
        nationality: "German",
      },
      {
        name: "An",
        email: "a01@gmail.com",
        age: 15,
        nationality: "Portuguese",
      },
      {
        name: "AP",
        email: "a02@gmail.com",
        age: 20,
        nationality: "Japan",
      },
    ],
  });
}

seed().then(() => prisma.$disconnect());
