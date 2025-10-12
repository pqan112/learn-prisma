import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          nationality: {
            in: ["Viet Nam", "German"],
          },
        },
        {
          age: {
            gte: 18,
          },
        },
      ],
    },
  });
  res.json(users);
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
