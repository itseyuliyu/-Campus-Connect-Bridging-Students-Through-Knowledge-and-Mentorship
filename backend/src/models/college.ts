import { prisma } from "@/db.js";

export async function getCollege(abbreviation: string) {
  return await prisma.college.findUnique({
    where: {
      abbreviation,
    },
  });
}

export async function createCollge({
  abbreviation,
  name,
}: {
  abbreviation: string;
  name: string;
}) {
  const checkCollege = await prisma.college.findUnique({
    where: {
      abbreviation,
    },
  });
  if (checkCollege == null) {
    const college = await prisma.college.create({
      data: { abbreviation, name },
    });
    if (college) {
      return {
        error: null,
        success: true,
        data: college,
      };
    } else {
      return {
        error: "Error creating college",
        success: false,
        data: null,
      };
    }
  } else {
    return {
      error: "College already exsists",
      success: false,
      data: null,
    };
  }
}
