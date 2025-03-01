import { z } from "zod";
import { baseSchema } from "./base.schema";

const categorySchema = baseSchema.extend({
  name: z.string(),
});

const categoryReturnSchema = baseSchema.extend({
  name: z.string(),
});

const categoryCreateSchema = categorySchema.omit({ id: true });

export { categoryCreateSchema, categorySchema, categoryReturnSchema };
