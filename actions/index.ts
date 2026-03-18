'use server';

import { z } from "zod";
import { signupSchema } from "@/schemas";


export async function createUser(values: z.infer<typeof signupSchema>) {
    const result =signupSchema.safeParse(values);

    if (!result.success) {
        return {status: "error", message: result.error.message}
    }

    console.log(result.data)

    return {
        status: "success",
        message: "User created successfully"
    }
}