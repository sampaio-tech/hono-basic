import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";

import { logger } from "@/middlewares/pino";

import type AppBindings from "./types";

export default function createApp() {
  const app = new OpenAPIHono<AppBindings>(
    {
      strict: false,
    },
  );
  app.use(serveEmojiFavicon("✅"));
  app.use(logger());
  app.notFound(notFound);
  app.onError(onError);
  return app;
}
