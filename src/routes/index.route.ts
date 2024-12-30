import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCode from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { createMessageObjectSchema } from "stoker/openapi/schemas";

import { createRouter } from "@/lib/create-app";

const router = createRouter().openapi(
  createRoute(
    { method: "get", path: "/", responses: {
      [HttpStatusCode.OK]:
      jsonContent(createMessageObjectSchema("Tasks API"), "Tasks API Index"),
    } },
  ),
  (c) => {
    return c.json({
      message: "Tasks API",
    }, HttpStatusCode.OK);
  },

);

export default router;
