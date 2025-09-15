import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link, useNavigate } from "react-router";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import axios from "axios";

import { Form } from "@/components/ui/form";
import FormInput from "./FormInput";
import AppButton from "../../../components/shared/AppButton";
import { login } from "@/lib/api/api";
import { useAuthContext } from "@/context/AuthContext";
import { loginValidationSchema } from "@/lib/validation";
import ErrorMsg from "../../../components/shared/ErrorMsg";

function LoginForm() {
    const { setToken, setUser } = useAuthContext();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const form = useForm<z.infer<typeof loginValidationSchema>>({
        resolver: zodResolver(loginValidationSchema),
        defaultValues: {
            email: "hagar2@dev.com",
            password: "12345678",
        },
    });

    async function onSubmit(values: z.infer<typeof loginValidationSchema>) {
        try {
            const result = await login(values);

            const { token, name, email, phone, country, image } = result.data;

            if (!token) {
                setError(result.message || "Login failed");
            }

            setUser({ name, email, phone, country, image });
            setToken(token);
            form.reset();
            navigate("/home");
        } catch (error: unknown) {
            if (axios.isAxiosError(error))
                setError(error.response?.data?.message);
            else setError("An unexpected error occurred. Cannot login");
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 w-full flex flex-col"
            >
                {error && <ErrorMsg msg={error} />}

                <FormInput
                    form={form}
                    fieldName="email"
                    Icon={Mail}
                    label="Email"
                    placeholder="kneeDue@untitledui.com"
                    type="email"
                />

                <FormInput
                    form={form}
                    fieldName="password"
                    Icon={Lock}
                    label="Password"
                    placeholder="***********"
                    type="password"
                />

                <Link
                    to="/forget-password"
                    className="self-end text-sm -mt-4 hover:text-gray-700 transition-colors mb-4"
                >
                    Forgot Password?
                </Link>

                <AppButton
                    type="submit"
                    isSubmitting={form.formState.isSubmitting}
                >
                    Log In
                </AppButton>
            </form>
        </Form>
    );
}

export default LoginForm;
