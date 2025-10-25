import { Hono } from "hono";
import { createCollegeSchema } from "../form-schema.js";
import {
  createCollge,
  getCollege,
  getAllColleges,
} from "../models/college-model.js";
import { generateResponse } from "../utils/generate-response.js";

const app = new Hono();

app
  .get("/", async (c) => {
    const abbreviation = c.req.query("id");
    const all = c.req.query("all");
    if (all) {
      const colleges = await getAllColleges();
      if (colleges.length != 0) {
        return c.json(colleges);
      } else {
        return c.json(
          generateResponse({
            success: false,
            error: "No record found.",
          })
        );
      }
    }
    if (abbreviation) {
      const college = await getCollege(abbreviation);

      if (college == null) {
        return c.json(
          generateResponse({
            success: false,
            error: "No record found",
          })
        );
      } else {
        return c.json(
          generateResponse<typeof college>({
            success: true,
            data: college,
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

app.get("/colleges", async (c) => {
  const colleges = await getAllColleges();
  console.log(colleges);
});

export default app;
