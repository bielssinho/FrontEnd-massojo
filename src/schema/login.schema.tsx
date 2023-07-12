import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email('o e-mail inserido é inválido'),
    password: z.string().min(8, { message: 'A senha deve ter no mínimo 8 caracteres' }),
});

export type loginSchemaType = z.infer<typeof loginSchema>