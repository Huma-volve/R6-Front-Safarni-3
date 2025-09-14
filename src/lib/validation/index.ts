import { OTP_LENGTH } from "@/constants";
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

export const OTPValidationSchema = z.object({
    otp: z.string().min(OTP_LENGTH, {
        message: `Your one-time password must be ${OTP_LENGTH} characters.`,
    }),
});

export const newPasswordValidationSchema = z.object({
    password: z.string().trim().min(8, { message: "At least 8 characters." }),
    confirmPassword: z
        .string()
        .trim()
        .min(8, { message: "At least 8 characters." }),
});

export const searchValidationSchema = z.object({
    search: z.string().trim().min(3, { message: "At least 3 characters." }),
});

export const filterValidationSchema = z.object({
    sortBy: z.enum([
        "price&sort_order=asc",
        "price",
        "price&sort_order=desc",
        "rating&sort_order=desc",
        "views&sort_order=desc",
        "",
    ]),
    priceRange: z.tuple([z.number(), z.number()]),
    adventureStyle: z.array(
        z.enum(["adventureTravel", "cityBreaks", "waterActivity", "roadTrips"])
    ),
    search: z.string(),
    minRating: z.enum(["0", "1", "2", "3", "4", "5"]),
});
