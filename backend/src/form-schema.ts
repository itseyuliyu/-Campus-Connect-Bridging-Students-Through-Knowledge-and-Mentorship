import { z } from "zod";

export const getStudentSchema = z.object({
  username: z.string().min(5),
  password: z.string().min(6),
});

export const createCollegeSchema = z.object({
  abbreviation: z.string().min(3),
  name: z.string().min(4),
});
