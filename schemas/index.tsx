import { z } from 'zod'

export const signupSchema = z.object({
    name: z.string()
        .min(2, "Name mut be at least two characters long")
        .max(50, "Name must be less than 50 characters long")
        .regex(/^[a-zA-Z\s]+$/, "Name must only contain letters and spaces"),
    email: z.email("Invalid email address")
        .refine((val) => val.endsWith("gmail.com") || val.endsWith("yahoo.com"), {
            message: "Email must end with 'gmail.com' or 'yahoo.com'"
        }),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .max(20, "Password must be less than 20 characters long")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[!@#$%&*?]/, "Password must contain at least one special character (!@#$%&*?)"),
})