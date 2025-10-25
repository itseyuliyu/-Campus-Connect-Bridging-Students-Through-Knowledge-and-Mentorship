import { Hono } from "hono";
import { createUserSchema, getStudentSchema } from "./form-schema.js";
import { createUser, getUser } from "./models/student.js";

const app = new Hono();

/**
 * get user using username and password
 */
app.post("/login", async (c) => {
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

app.post("/register", async (c) => {
  const formData = await c.req.parseBody();
  const { success, error, data } = createUserSchema.safeParse(formData);
  if (success) {
    const student = await createUser(data);
    return c.json(student);
  } else {
    return c.json(error.issues);
  }
});

export default app;
