import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const ticketRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string(),
        description: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.ticket.create({
        data: {
          name: input.name,
          email: input.email,
          description: input.description,
          status: "new",
        },
      });
    }),

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.ticket.findMany();
  }),

  getById: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db.ticket.findFirst({
        where: { id: input.id },
      });
    }),
});
