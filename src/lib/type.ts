import { z } from 'zod';

export const subscribeSchema = z.object({
  email: z.string().min(1, { message: 'Email is Required' }).email(),
});

export type TSubscribe = z.infer<typeof subscribeSchema>;
