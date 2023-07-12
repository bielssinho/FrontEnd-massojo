import { z } from 'zod';

export const registerSchema = z.object({
    name: z
        .string()
        .min(3, 'minímo 3 caracteres.')
        .max(40, 'máximo 40 caracteres.'),
    email: z
        .string()
        .email('digite um email válido.'),
    password: z
        .string()
        .min(8, { message: "Mínimo de 8 caracteres" })
        .max(20, { message: "Máximo de 20 caracteres" })
        .regex(/^(?=.*[!@#$%^&*])/, {
            message:
                "A senha deve conter pelo menos um caractere especial: !@#$%^&*",
        }),
    phone: z
        .string()
        .min(11, "digite seu Celular com DDD")
        .max(11, "digite seu Celular com DDD"),
    birthdate: z
        .string()
        .min(8, "sua data de nacimento (apenas numeros)")
        .max(8, "sua data de nacimento (apenas numeros)"),
})

export type registerSchemaType = z.infer<typeof registerSchema>