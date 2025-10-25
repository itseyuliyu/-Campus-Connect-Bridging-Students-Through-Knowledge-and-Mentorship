import { Hono } from "hono";
import { createUserSchema, getStudentSchema } from "../form-schema.js";
import {
  createStudent,
  getStudentsByCollege,
  getStudentsByDepartment,
  getStudentByCredentials,
} from "../models/student-model.js";
import { generateResponse } from "@/utils/generate-response.js";

const app = new Hono();

/**
 * get user using username and password
 */

app.get("/", async (c) => {
  const college = c.req.query("college");
  const department = c.req.query("department");
  if (college) {
    const data = await getStudentsByCollege(college);
    return c.json(data);
  }
  if (department && parseInt(department)) {
    const data = await getStudentsByDepartment(parseInt(department));
    return c.json(data);
  }
  return c.json(generateResponse({ success: false, error: "Invalid request" }));
});

app.post("/login", async (c) => {
  const formData = await c.req.parseBody();
  const { success, error, data } = getStudentSchema.safeParse(formData);
  if (success) {
    const result = await getStudentByCredentials({
      username: data.username,
      password: data.password,
    });
    if (result == null) {
      return c.json({ error: true, message: "Invalid Credentials" });
    } else {
      return c.json({
        username: result.username,
        password: result.password,
        name: result.fname + " " + result.lname,
      });
    }
  } else {
    console.log(error);
    return c.json({ error: true, message: "Invalid Input" });
  }
});

app.post("/register", async (c) => {
  const formData = await c.req.parseBody();
  const { success, error, data } = createUserSchema.safeParse(formData);
  if (success) {
    const student = await createStudent(data);
    return c.json(student);
  } else {
    return c.json(error.issues);
  }
});

export default app;
