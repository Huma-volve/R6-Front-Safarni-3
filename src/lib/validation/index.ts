import { z } from "zod";

export const signupValidationSchema = z.object({
    name: z.string().trim().min(2, { message: "At least 2 characters." }),
    email: z.string().trim().email({ message: "Invalid email address" }),
    password: z.string().trim().min(8, { message: "At least 8 characters." }),
});

export const loginValidationSchema = z.object({
    email: z.string().trim().email({ message: "Invalid email address" }),
    password: z.string().trim().min(8, { message: "At least 8 characters." }),
});

export const forgetPasswordValidationSchema = z.object({
    email: z.string().trim().email({ message: "Invalid email address" }),
});

export const newPasswordValidationSchema = z.object({
    password: z.string().trim().min(8, { message: "At least 8 characters." }),
    confirmPassword: z
        .string()
        .trim()
        .min(8, { message: "At least 8 characters." }),
});
