import { app, get, post } from "https://denopkg.com/syumai/dinatra/mod.ts";
import { renderFile } from "https://deno.land/x/dejs/mod.ts";

const templatePath = `${Deno.cwd()}/src/index.ejs`;
console.log(templatePath);

app(
  get("/", async () => await renderFile(templatePath, { message: "" })),
  post(
    "/posts",
    async ({ params: { message } }: any) =>
      await renderFile(templatePath, { message }),
  ),
);