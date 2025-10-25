import { Hono } from "hono";
import { getStudentSchema } from "./form-schema.js";
import { getUser } from "./models/student.js";

const app = new Hono();

/**
 * get user using username and password
 */
app.post("/", async (c) => {
  const formData = await c.req.parseBody();
  const { success, error, data } = getStudentSchema.safeParse(formData);
  if (success) {
    const result = await getUser({
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

app.post("/create", async (c) => {
  const data = await c.req.parseBody();
});

export default app;
