import { z } from "zod";
import { publicProcedure, router } from "../trpc.js";

const input_29 = z.object({
  route: z.literal(29),
  search: z.string().min(1).max(64),
  filters: z.object({
    active: z.boolean(),
    level: z.enum(['low', 'mid', 'high']),
    tags: z.array(z.string().min(1).max(16)).max(12),
  }),
  cursor: z.object({
    page: z.number().int().min(1).max(9999),
    size: z.number().int().min(1).max(250),
  }),
});

export const router29 = router({
  proc0: publicProcedure
    .input(input_29.extend({ variant: z.literal("v_29_0") }))
    .output(
      input_29.extend({
        data: z.object({
          count: z.number().int().min(0),
          preview: z.array(z.object({ id: z.string(), score: z.number() })).max(8),
        }),
      })
    )
    .query(({ input }) => ({
      ...input,
      data: { count: input.cursor.page * input.cursor.size, preview: [] },
    })),
  proc1: publicProcedure
    .input(input_29.extend({ variant: z.literal("v_29_1") }))
    .output(
      input_29.extend({
        data: z.object({
          count: z.number().int().min(0),
          preview: z.array(z.object({ id: z.string(), score: z.number() })).max(8),
        }),
      })
    )
    .query(({ input }) => ({
      ...input,
      data: { count: input.cursor.page * input.cursor.size, preview: [] },
    })),
  proc2: publicProcedure
    .input(input_29.extend({ variant: z.literal("v_29_2") }))
    .output(
      input_29.extend({
        data: z.object({
          count: z.number().int().min(0),
          preview: z.array(z.object({ id: z.string(), score: z.number() })).max(8),
        }),
      })
    )
    .query(({ input }) => ({
      ...input,
      data: { count: input.cursor.page * input.cursor.size, preview: [] },
    })),
  proc3: publicProcedure
    .input(input_29.extend({ variant: z.literal("v_29_3") }))
    .output(
      input_29.extend({
        data: z.object({
          count: z.number().int().min(0),
          preview: z.array(z.object({ id: z.string(), score: z.number() })).max(8),
        }),
      })
    )
    .query(({ input }) => ({
      ...input,
      data: { count: input.cursor.page * input.cursor.size, preview: [] },
    })),
  proc4: publicProcedure
    .input(input_29.extend({ variant: z.literal("v_29_4") }))
    .output(
      input_29.extend({
        data: z.object({
          count: z.number().int().min(0),
          preview: z.array(z.object({ id: z.string(), score: z.number() })).max(8),
        }),
      })
    )
    .query(({ input }) => ({
      ...input,
      data: { count: input.cursor.page * input.cursor.size, preview: [] },
    })),
  proc5: publicProcedure
    .input(input_29.extend({ variant: z.literal("v_29_5") }))
    .output(
      input_29.extend({
        data: z.object({
          count: z.number().int().min(0),
          preview: z.array(z.object({ id: z.string(), score: z.number() })).max(8),
        }),
      })
    )
    .query(({ input }) => ({
      ...input,
      data: { count: input.cursor.page * input.cursor.size, preview: [] },
    })),
  proc6: publicProcedure
    .input(input_29.extend({ variant: z.literal("v_29_6") }))
    .output(
      input_29.extend({
        data: z.object({
          count: z.number().int().min(0),
          preview: z.array(z.object({ id: z.string(), score: z.number() })).max(8),
        }),
      })
    )
    .query(({ input }) => ({
      ...input,
      data: { count: input.cursor.page * input.cursor.size, preview: [] },
    })),
  proc7: publicProcedure
    .input(input_29.extend({ variant: z.literal("v_29_7") }))
    .output(
      input_29.extend({
        data: z.object({
          count: z.number().int().min(0),
          preview: z.array(z.object({ id: z.string(), score: z.number() })).max(8),
        }),
      })
    )
    .query(({ input }) => ({
      ...input,
      data: { count: input.cursor.page * input.cursor.size, preview: [] },
    })),
  proc8: publicProcedure
    .input(input_29.extend({ variant: z.literal("v_29_8") }))
    .output(
      input_29.extend({
        data: z.object({
          count: z.number().int().min(0),
          preview: z.array(z.object({ id: z.string(), score: z.number() })).max(8),
        }),
      })
    )
    .query(({ input }) => ({
      ...input,
      data: { count: input.cursor.page * input.cursor.size, preview: [] },
    })),
  proc9: publicProcedure
    .input(input_29.extend({ variant: z.literal("v_29_9") }))
    .output(
      input_29.extend({
        data: z.object({
          count: z.number().int().min(0),
          preview: z.array(z.object({ id: z.string(), score: z.number() })).max(8),
        }),
      })
    )
    .query(({ input }) => ({
      ...input,
      data: { count: input.cursor.page * input.cursor.size, preview: [] },
    })),
  proc10: publicProcedure
    .input(input_29.extend({ variant: z.literal("v_29_10") }))
    .output(
      input_29.extend({
        data: z.object({
          count: z.number().int().min(0),
          preview: z.array(z.object({ id: z.string(), score: z.number() })).max(8),
        }),
      })
    )
    .query(({ input }) => ({
      ...input,
      data: { count: input.cursor.page * input.cursor.size, preview: [] },
    })),
  proc11: publicProcedure
    .input(input_29.extend({ variant: z.literal("v_29_11") }))
    .output(
      input_29.extend({
        data: z.object({
          count: z.number().int().min(0),
          preview: z.array(z.object({ id: z.string(), score: z.number() })).max(8),
        }),
      })
    )
    .query(({ input }) => ({
      ...input,
      data: { count: input.cursor.page * input.cursor.size, preview: [] },
    })),
  proc12: publicProcedure
    .input(input_29.extend({ variant: z.literal("v_29_12") }))
    .output(
      input_29.extend({
        data: z.object({
          count: z.number().int().min(0),
          preview: z.array(z.object({ id: z.string(), score: z.number() })).max(8),
        }),
      })
    )
    .query(({ input }) => ({
      ...input,
      data: { count: input.cursor.page * input.cursor.size, preview: [] },
    })),
  proc13: publicProcedure
    .input(input_29.extend({ variant: z.literal("v_29_13") }))
    .output(
      input_29.extend({
        data: z.object({
          count: z.number().int().min(0),
          preview: z.array(z.object({ id: z.string(), score: z.number() })).max(8),
        }),
      })
    )
    .query(({ input }) => ({
      ...input,
      data: { count: input.cursor.page * input.cursor.size, preview: [] },
    })),
});
