import { Hono } from "hono";
import {
  createDepartment,
  getAllDepartments,
  getCollegeDepartments,
  getDepartment,
} from "./models/department.js";
import { generateResponse } from "./utils/generate-response.js";
import { createDepartmentSchema } from "./form-schema.js";

const app = new Hono();

app
  .get("/", async (c) => {
    const id = c.req.query("id");
    const all = c.req.query("all");
    const college = c.req.query("college");
    console.log(id, all, college);
    if (college) {
      const departments = await getCollegeDepartments(college);
      if (departments.length != 0) {
        return c.json(
          generateResponse({
            success: true,
            data: departments,
          })
        );
      } else {
        return c.json(
          generateResponse({
            error: "No record found.",
            success: false,
          })
        );
      }
    }
    if (all) {
      const departments = await getAllDepartments();
      if (departments.length != 0) {
        return c.json(
          generateResponse({
            success: true,
            data: departments,
          })
        );
      } else {
        return c.json(
          generateResponse({
            error: "No record found.",
            success: false,
          })
        );
      }
    }
    if (id && parseInt(id)) {
      const department = await getDepartment(parseInt(id));
      if (department) {
        return c.json(
          generateResponse({
            success: true,
            data: department,
          })
        );
      } else {
        return c.json(
          generateResponse({
            error: "No record found.",
            success: false,
          })
        );
      }
    }
    return c.json(
      generateResponse({ success: false, error: "Invalid Request" })
    );
  })
  .post(async (c) => {
    const formData = await c.req.parseBody();
    const {
      success,
      error: parseError,
      data: parsedData,
    } = await createDepartmentSchema.safeParse(formData);
    if (success) {
      const { success, error, data } = await createDepartment({
        name: parsedData.name,
        abbreviation: parsedData.abbreviation,
        collegeName: parsedData.collegeName,
      });
      if (success) {
        return c.json(
          generateResponse({
            success: true,
            data,
          })
        );
      } else {
        return c.json(
          generateResponse({
            success: false,
            error,
          })
        );
      }
    } else {
      console.log(parseError);
    }
  });

export default app;
