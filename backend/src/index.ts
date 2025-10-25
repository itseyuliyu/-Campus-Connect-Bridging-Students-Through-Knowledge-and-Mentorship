import { serve } from "@hono/node-server";
import { Hono } from "hono";
import college from "./routes/college.js";
import department from "./routes/department.js";
import student from "./routes/student.js";
import project from "./routes/project.js";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/college", college);
app.route("/department", department);
app.route("/student", student);
app.route("/project", project);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
