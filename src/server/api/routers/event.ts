import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const eventRouter = createTRPCRouter({
    hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
        return {
            greeting: `Hello ${input.text}`,
        };
    }),

    // create: publicProcedure
    //     .input(z.object({ name: z.string().min(1) }))
    //     .mutation(async ({ ctx, input }) => {
    //         return ctx.prisma.event.create({
    //             data: {
    //                 name: input.name,
    //             },
    //         });
    //     }),

    // getLatest: publicProcedure.query(async ({ ctx }) => {
    //     const post = await ctx.prisma.event.findFirst({
    //         orderBy: { createdAt: "desc" },
    //     });

    //     return post ?? null;
    // }),
});
