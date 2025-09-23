import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import axios from "axios";

import { Form } from "@/components/ui/form";
import { newPasswordValidationSchema } from "@/lib/validation";
import FormInput from "./FormInput";
import PasswordGuide from "./PasswordGuide";
import AppButton from "../../../components/shared/AppButton";
import { resetPassword } from "@/lib/api/api";
import ErrorMsg from "../../../components/shared/ErrorMsg";

function NewPasswordForm() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const location = useLocation();

    const form = useForm<z.infer<typeof newPasswordValidationSchema>>({
        resolver: zodResolver(newPasswordValidationSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    async function onSubmit(
        values: z.infer<typeof newPasswordValidationSchema>
    ) {
        try {
            await resetPassword(
                values.password,
                values.confirmPassword,
                location.state.token
            );

            form.reset();
            navigate("/done");
        } catch (error: unknown) {
            if (axios.isAxiosError(error))
                setError(error.response?.data?.message);
            else setError("An unexpected error occurred.");
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
                    fieldName="password"
                    Icon={Lock}
                    label="Password"
                    placeholder="***********"
                    type="password"
                />

                <FormInput
                    form={form}
                    fieldName="confirmPassword"
                    Icon={Lock}
                    label="Confirm Password"
                    placeholder="***********"
                    type="password"
                />
                <div>
                    <PasswordGuide>must be at least 8 characters</PasswordGuide>
                    <PasswordGuide>
                        must contain one special character
                    </PasswordGuide>
                </div>
                <AppButton type="submit">Reset Password</AppButton>
            </form>
        </Form>
    );
}

export default NewPasswordForm;
