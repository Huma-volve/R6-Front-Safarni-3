import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router";
import { Mail, Lock, UserRound } from "lucide-react";
import { useState } from "react";

import { Form } from "@/components/ui/form";
import { signupValidationSchema } from "@/lib/validation";
import FormInput from "./FormInput";
import PasswordGuide from "./PasswordGuide";
import AppButton from "./AppButton";
import { createNewUser } from "@/lib/api/api";
import { useAuthContext } from "@/context/AuthContext";
import ErrorMsg from "./ErrorMsg";

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
        } catch (error: any) {
            const { email: emailError } = error.response.data.data;
            if (emailError.length > 0) setError(emailError[0]);
            else setError(error.response?.data?.message);
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
                    label="Name"
                    placeholder="kneeDue"
                    Icon={UserRound}
                />

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
                <div className="my-2">
                    <PasswordGuide>must be at least 8 characters</PasswordGuide>
                    <PasswordGuide>
                        must contain one special character
                    </PasswordGuide>
                </div>

                <AppButton
                    className="bg-blue-700"
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
