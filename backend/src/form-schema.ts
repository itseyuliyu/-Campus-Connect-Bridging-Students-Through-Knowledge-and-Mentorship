import { email, z } from "zod";

export const getStudentSchema = z.object({
  username: z.string().min(5),
  password: z.string().min(6),
});

export const createUserSchema = z.object({
  fname: z.string().min(3),
  lname: z.string().min(3),
  username: z.string().min(5),
  email: z.email().min(5),
  password: z.string().min(6),
  classYear: z.coerce.number().min(1),
  bio: z.string().min(20).optional(),
  departmentId: z.coerce.number().min(1),
});

export const createCollegeSchema = z.object({
  abbreviation: z.string().min(3),
  name: z.string().min(4),
});

export const createDepartmentSchema = z.object({
  name: z.string().min(5),
  abbreviation: z.string().min(2),
  collegeName: z.string().min(3),
});
