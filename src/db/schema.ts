import { boolean, integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const tasks = pgTable("tasks", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").$defaultFn(() => new Date()).$onUpdate(() => new Date()),
});
