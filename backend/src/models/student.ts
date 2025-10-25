import { prisma } from "@/db.js";

export async function getUser({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  return await prisma.student.findUnique({
    where: {
      username,
      password,
    },
  });
}
