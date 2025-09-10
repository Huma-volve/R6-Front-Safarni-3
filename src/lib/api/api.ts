import axios from "axios";

import type { INewUser, IUserCredentials } from "@/types";

const safarni = "http://round5-safarnia.huma-volve.com/api";

export async function createNewUser(newUser: INewUser) {
    try {
        const res = await axios.post(`${safarni}/register`, newUser, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function login(userCredentials: IUserCredentials) {
    try {
        const res = await axios.post(`${safarni}/login`, userCredentials, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function forgetPassword(email: string) {
    try {
        const res = await axios.post(
            `${safarni}/forgot-password`,
            { email },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function sendOTP(otp: string, email: string) {
    try {
        const res = await axios.post(
            `${safarni}/otp`,
            { email, otp },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function resetPassword(
    newPassword: string,
    passwordConfirmation: string
) {
    try {
        const res = await axios.post(
            `${safarni}/reset-password`,
            {
                password: newPassword,
                password_confirmation: passwordConfirmation,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function logout() {
    localStorage.removeItem("token");
}
