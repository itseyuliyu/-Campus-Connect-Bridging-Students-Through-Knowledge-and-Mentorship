import { Hono } from "hono";
import { createProjectSchema } from "../form-schema.js";
import { generateResponse } from "@/utils/generate-response.js";
import {
  createProject,
  getProjectsByDepartment,
  getProjectsByStudent,
} from "@/models/project-model.js";
import { error } from "console";

const app = new Hono();

app
  .get("/", async (c) => {
    const studentId = c.req.query("student_id");
    const department = c.req.query("department_id");
    if (department) {
      const id = parseInt(department);
      if (id) {
        const projects = await getProjectsByDepartment(id);
        if (projects.length > 0) {
          return c.json(generateResponse({ success: true, data: projects }));
        } else {
          return c.json(
            generateResponse({
              success: false,
              error: "No records found.",
            })
          );
        }
      }
    }
    if (studentId) {
      const id = parseInt(studentId);
      if (id) {
        const projects = await getProjectsByStudent(id);
        if (projects.length > 0) {
          return c.json(generateResponse({ success: true, data: projects }));
        } else {
          return c.json(
            generateResponse({
              success: false,
              error: "No records found.",
            })
          );
        }
      }
    }
    return c.json({ success: false, error: "Invalid request" });
  })
  .post(async (c) => {
    const formData = await c.req.parseBody();
    const { success, error, data } = createProjectSchema.safeParse(formData);
    if (success) {
      const project = await createProject(data);
      return c.json(
        generateResponse({
          success: true,
          data: project,
        })
      );
    } else {
      return c.json(
        generateResponse({
          success: false,
          error: "Invalid request",
        })
      );
    }
  });

export default app;
