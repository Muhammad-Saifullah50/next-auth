import { number, z } from 'zod'

export const SignUpSchema = z.object({
    name: z.string().min(3, "name must contain more than 3 characters"),
    email: z.string().email(),
    password: z.string().min(5, 'password should be at least 5 chracters long').or(number().min(5, 'password should be at least 5 chracters long')),
    confirmPassword: z.string().or(z.number())
}).refine((pwd) => pwd.password === pwd.confirmPassword, "passwords do not match")