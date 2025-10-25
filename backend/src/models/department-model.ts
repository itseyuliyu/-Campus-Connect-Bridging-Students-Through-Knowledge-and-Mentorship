import { prisma } from "@/db.js";
import { Prisma } from "@/generated/prisma/index.js";
import { generateResponse } from "@/utils/generate-response.js";

export async function getAllDepartments() {
  return await prisma.department.findMany();
}

export async function getCollegeDepartments(collegeName: string) {
  return await prisma.department.findMany({
    where: {
      collegeName,
    },
  });
}

export async function getDepartment(id: number) {
  return await prisma.department.findUnique({
    where: {
      id,
    },
  });
}

export async function createDepartment({
  name,
  abbreviation,
  collegeName,
}: Prisma.DepartmentUncheckedCreateInput) {
  const checkDepartment = await prisma.department.findUnique({
    where: {
      abbreviation: abbreviation,
    },
  });
  if (checkDepartment == null) {
    try {
      const department = await prisma.department.create({
        data: {
          name,
          abbreviation,
          college: {
            connect: {
              abbreviation: collegeName,
            },
          },
        },
      });
      return generateResponse({
        success: true,
        data: department,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code == "P2025"
      ) {
        return generateResponse({
          success: false,
          error: "College record not found.",
        });
      }
      console.log(error);
      return generateResponse({
        success: false,
        error: "Error creating record.",
      });
    }
  } else {
    return generateResponse({
      success: false,
      error: "Record with abbreviation already exists.",
    });
  }
}
