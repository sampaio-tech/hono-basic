import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCode from "stoker/http-status-codes";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";
import { createErrorSchema, IdParamsSchema } from "stoker/openapi/schemas";

import { insertTasksSchema, selectTasksSchema } from "@/db/schema";
import { notFoundSchema } from "@/lib/constants";

export const tags = ["Tasks"];

export const list = createRoute(
  {
    path: "/tasks",
    method: "get",
    tags,
    responses: {
      [HttpStatusCode.OK]: jsonContent(z.array(selectTasksSchema), "The list of tasks"),
    },
  },
);

export const create = createRoute(
  {
    path: "/tasks",
    method: "post",
    request: {
      body: jsonContentRequired(insertTasksSchema, "The task to create"),
    },
    tags,
    responses: {
      [HttpStatusCode.OK]: jsonContent(selectTasksSchema, "The created task"),
      [HttpStatusCode.UNPROCESSABLE_ENTITY]:
      jsonContent(createErrorSchema(selectTasksSchema), "The validation error(s)"),
    },
  },
);

export const getOne = createRoute(
  {
    path: "/tasks/{id}",
    method: "get",
    request: {
      params: IdParamsSchema,
    },
    tags,
    responses: {
      [HttpStatusCode.OK]: jsonContent(selectTasksSchema, "The requested task"),
      [HttpStatusCode.NOT_FOUND]: jsonContent(notFoundSchema, "Task not found"),
      [HttpStatusCode.UNPROCESSABLE_ENTITY]:
      jsonContent(createErrorSchema(IdParamsSchema), "Invalid id error"),
    },
  },
);

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
export type GetOneRoute = typeof getOne;
