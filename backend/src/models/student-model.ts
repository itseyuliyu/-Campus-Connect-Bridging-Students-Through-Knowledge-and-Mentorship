import { prisma } from "@/db.js";
import { Prisma } from "@/generated/prisma/index.js";
import { generateResponse } from "@/utils/generate-response.js";

export async function getStudentByCredentials({
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

export async function getStudentsByCollege(collegeName: string) {
  const students = await prisma.student.findMany({
    where: {
      collegeName,
    },
  });
  if (students.length > 0) {
    return generateResponse({
      success: true,
      data: students,
    });
  } else {
    return generateResponse({
      success: false,
      error: "No records found.",
    });
  }
}

export async function getStudentsByDepartment(departmentId: number) {
  const students = await prisma.student.findMany({
    where: {
      departmentId,
    },
  });
  if (students.length > 0) {
    return generateResponse({
      success: true,
      data: students,
    });
  } else {
    return generateResponse({
      success: false,
      error: "No records found.",
    });
  }
}

export async function createStudent({
  fname,
  lname,
  username,
  password,
  email,
  classYear,
  departmentId,
  collegeName,
  bio,
}: {
  fname: string;
  lname: string;
  username: string;
  password: string;
  email: string;
  classYear: number;
  departmentId: number;
  collegeName: string;
  bio?: string;
}) {
  try {
    const student = await prisma.student.create({
      data: {
        fname,
        lname,
        username,
        password,
        email,
        classYear,
        bio,
        department: {
          connect: {
            id: departmentId,
          },
        },
        college: {
          connect: {
            abbreviation: collegeName,
          },
        },
      },
    });
    return generateResponse({ success: true, data: student });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code == "P2002"
    ) {
      const targets = error.meta!.target as string[];
      if (targets.length > 0) {
        if (targets[0] == "email") {
          return generateResponse({
            success: false,
            error: "Record with the same email already exsists",
          });
        }
        if (targets[0] == "username") {
          return generateResponse({
            success: false,
            error: "Record with the same username already exsists",
          });
        }
      } else {
        return generateResponse({
          success: false,
          error: "Error creating record",
        });
      }
    }
    return generateResponse({
      success: false,
      error: "Error creating record",
    });
  }
}
