import { Hono } from "hono";
import { createCollegeSchema } from "./form-schema.js";
import { createCollge } from "./models/college.js";

const app = new Hono();

app
  .get("/", async (c) => {})
  .post(async (c) => {
    const formData = await c.req.parseBody();
    const { success, error, data } = createCollegeSchema.safeParse(formData);
    if (success) {
      const { error, success } = await createCollge({
        abbreviation: data.abbreviation,
        name: data.name,
      });
      if (success) {
        return c.json({
          msg: "College created",
        });
      } else {
        return c.json({
          msg: error,
        });
      }
    } else {
      console.log(error);
      return c.json({
        msg: "Invalid Data",
      });
    }
  });

export default app;
