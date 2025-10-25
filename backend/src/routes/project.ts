import { Hono } from "hono";
import { createProjectSchema } from "../form-schema.js";
import { generateResponse } from "@/utils/generate-response.js";
import { createProject } from "@/models/project-model.js";

const app = new Hono();

/**
 * get user using username and password
 */

app.post("/", async (c) => {
  const formData = await c.req.parseBody();
  console.log(formData);
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
    console.log(error);
    return c.json(
      generateResponse({
        success: false,
        error: "Invalid request",
      })
    );
  }
});

export default app;
