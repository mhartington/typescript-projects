import { z } from "zod";
import { publicProcedure, router } from "../trpc.js";

const input_7 = z.object({
  route: z.literal(7),
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

export const router7 = router({
  proc0: publicProcedure
    .input(input_7.extend({ variant: z.literal("v_7_0") }))
    .output(
      input_7.extend({
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
    .input(input_7.extend({ variant: z.literal("v_7_1") }))
    .output(
      input_7.extend({
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
    .input(input_7.extend({ variant: z.literal("v_7_2") }))
    .output(
      input_7.extend({
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
    .input(input_7.extend({ variant: z.literal("v_7_3") }))
    .output(
      input_7.extend({
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
    .input(input_7.extend({ variant: z.literal("v_7_4") }))
    .output(
      input_7.extend({
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
    .input(input_7.extend({ variant: z.literal("v_7_5") }))
    .output(
      input_7.extend({
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
    .input(input_7.extend({ variant: z.literal("v_7_6") }))
    .output(
      input_7.extend({
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
    .input(input_7.extend({ variant: z.literal("v_7_7") }))
    .output(
      input_7.extend({
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
    .input(input_7.extend({ variant: z.literal("v_7_8") }))
    .output(
      input_7.extend({
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
    .input(input_7.extend({ variant: z.literal("v_7_9") }))
    .output(
      input_7.extend({
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
    .input(input_7.extend({ variant: z.literal("v_7_10") }))
    .output(
      input_7.extend({
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
    .input(input_7.extend({ variant: z.literal("v_7_11") }))
    .output(
      input_7.extend({
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
    .input(input_7.extend({ variant: z.literal("v_7_12") }))
    .output(
      input_7.extend({
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
    .input(input_7.extend({ variant: z.literal("v_7_13") }))
    .output(
      input_7.extend({
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
