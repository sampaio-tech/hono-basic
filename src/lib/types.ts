import type { PinoLogger } from "hono-pino";

export default interface AppBindings {
  Variables: {
    logger: PinoLogger;
  };
}
