import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  anyApiRoute: publicProcedure.query(() => {}),
});

export type AppRouter = typeof appRouter;
