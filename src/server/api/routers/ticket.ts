import { Status } from "@prisma/client";
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

  respond: protectedProcedure
    .input(
      z.object({
        status: z.string().min(1),
        id: z.number(),
        response: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.ticket.update({
        where: { id: input.id },
        data: {
          status: input.status as Status,
          updatedAt: new Date(),
        },
      });
      return ctx.db.response.create({
        data: {
          responseText: input.response,
          ticketId: input.id,
          respondedBy: ctx.session.user.email as string,
        },
      });
    }),
});
