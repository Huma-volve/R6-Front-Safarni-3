import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link, useNavigate } from "react-router";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";

import { Form } from "@/components/ui/form";
import FormInput from "./FormInput";
import AppButton from "./AppButton";
import { login } from "@/lib/api/api";
import { useAuthContext } from "@/context/AuthContext";
import { loginValidationSchema } from "@/lib/validation";
import ErrorMsg from "./ErrorMsg";

function LoginForm() {
    const { setToken, setUser } = useAuthContext();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const form = useForm<z.infer<typeof loginValidationSchema>>({
        resolver: zodResolver(loginValidationSchema),
        defaultValues: {
            email: "hagar2@dev.com",
            password: "123456789",
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
        } catch (error: any) {
            setError(error.response?.data?.message);
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
                    label="Email"
                    placeholder="kneeDue@untitledui.com"
                    Icon={Mail}
                />

                <FormInput
                    form={form}
                    fieldName="password"
                    label="Password"
                    placeholder="***********"
                    Icon={Lock}
                />

                <Link
                    to="/forget-password"
                    className="self-end text-sm -mt-4 hover:text-gray-700 transition-colors mb-4"
                >
                    Forgot Password?
                </Link>

                <AppButton
                    className="bg-blue-700"
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
