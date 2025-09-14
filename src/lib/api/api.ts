import axios from "axios";

import type { IFilterTour, INewUser, IUserCredentials } from "@/types";

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
    passwordConfirmation: string,
    token: string
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
                    Authorization: `Bearer ${token}`,
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

export async function getHomePageData() {
    try {
        const res = await axios.get(`${safarni}/home-page`);

        return res.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getRecommendedTours() {
    try {
        const res = await axios.get(`${safarni}/recommendedtour`);

        return res.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getTours(filter?: IFilterTour) {
    try {
        const params =
            filter &&
            Object.entries(filter)
                .filter((param) => {
                    if (
                        param[1] !== undefined &&
                        param[1] !== "" &&
                        param[1] !== "[]"
                    )
                        return param;
                })
                .map((param) => `${param[0]}=${param[1]}`);

        let url = `${safarni}/tours`;
        if (params) url += `?${params.join("&")}`;

        const res = await axios.get(url);

        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getTrendingTours() {
    try {
        const res = await axios.get(`${safarni}/trending-tours`);
        return res.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getSearchLocations(key: string) {
    try {
        const res = await axios.get(`${safarni}/locations?key=${key}`);
        return res.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
