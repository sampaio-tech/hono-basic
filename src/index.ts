import { serve } from "bun";

import app from "./app";
import env from "./env";

const port = Number(env.PORT || 3001);

// eslint-disable-next-line no-console
console.log(`Started server http://localhost:${port}`);

serve(
  { fetch: app.fetch, port },
);
