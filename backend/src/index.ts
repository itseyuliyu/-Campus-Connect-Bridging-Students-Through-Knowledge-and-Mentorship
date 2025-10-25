import { serve } from "@hono/node-server";
import { Hono } from "hono";
import college from "./college.js";
import student from "./student.js";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/college", college);
app.route("/student", student);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
