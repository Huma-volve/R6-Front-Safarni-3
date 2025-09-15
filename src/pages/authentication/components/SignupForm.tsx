import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router";
import { Mail, Lock, UserRound } from "lucide-react";
import { useState } from "react";
import axios from "axios";

import { Form } from "@/components/ui/form";
import { signupValidationSchema } from "@/lib/validation";
import FormInput from "./FormInput";
import PasswordGuide from "./PasswordGuide";
import AppButton from "../../../components/shared/AppButton";
import { createNewUser } from "@/lib/api/api";
import { useAuthContext } from "@/context/AuthContext";
import ErrorMsg from "../../../components/shared/ErrorMsg";

function SignupForm() {
    const { setToken } = useAuthContext();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const form = useForm<z.infer<typeof signupValidationSchema>>({
        resolver: zodResolver(signupValidationSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof signupValidationSchema>) {
        try {
            const result = await createNewUser(values);

            const { token } = result.data;
            if (!token) {
                setError(result.message || "Sign up failed");
            }

            form.reset();
            setToken(token);
            navigate("/home");
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.log(error);
                const emailError = error.response?.data?.data?.email;
                if (emailError.length > 0) setError(emailError[0]);
                else setError(error.response?.data?.message);
            } else {
                setError("An unexpected error occurred. Cannot signup");
            }
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 w-full"
            >
                {error && <ErrorMsg msg={error} />}

                <FormInput
                    form={form}
                    fieldName="name"
                    Icon={UserRound}
                    label="Name"
                    placeholder="kneeDue"
                />

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
                <div className="my-2">
                    <PasswordGuide>must be at least 8 characters</PasswordGuide>
                    <PasswordGuide>
                        must contain one special character
                    </PasswordGuide>
                </div>

                <AppButton
                    type="submit"
                    isSubmitting={form.formState.isSubmitting}
                >
                    Sign Up
                </AppButton>
            </form>
        </Form>
    );
}

export default SignupForm;
