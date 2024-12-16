import type { PinoLogger } from "hono-pino";

import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";

import createApp from "./lib/create-app";
import { logger } from "./middlewares/pino";

const app = createApp();
app.get("/hello", (c) => {
  return c.text("Hello Hono!");
});

export default app;
