import { Prisma } from "@/generated/prisma/client.js";
import { prisma } from "@/db.js";
import { generateResponse } from "@/utils/generate-response.js";

export async function getProjectsByDepartment(departmentId: number) {
  return await prisma.project.findMany({
    where: {
      departmentId,
    },
  });
}

export async function getProjectsByStudent(studentId: number) {
  return await prisma.project.findMany({
    where: {
      studentId,
    },
  });
}

export async function createProject({
  title,
  departmentId,
  course,
  classYear,
  createdAt,
  studentId,
}: Prisma.ProjectUncheckedCreateInput) {
  try {
    const project = await prisma.project.create({
      data: {
        title,
        department: {
          connect: {
            id: departmentId,
          },
        },
        course,
        student: {
          connect: {
            id: studentId,
          },
        },
        classYear,
        createdAt,
      },
    });
    return generateResponse({
      success: true,
      data: project,
    });
  } catch (error) {
    return generateResponse({
      success: false,
      error: "Error creating record.",
    });
  }
}
