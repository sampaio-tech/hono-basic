import { serve } from "bun";

import app from "./app";

const port = 3001;

// eslint-disable-next-line no-console
console.log(`Started server http://localhost:${port}`);

serve(
  { fetch: app.fetch, port },
);
