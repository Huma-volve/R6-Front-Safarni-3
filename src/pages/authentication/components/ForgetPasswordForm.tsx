import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";

import { Form } from "@/components/ui/form";
import { forgetPasswordValidationSchema } from "@/lib/validation";
import FormInput from "./FormInput";
import AppButton from "./AppButton";
import { forgetPassword } from "@/lib/api/api";

function ForgetPasswordForm() {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const form = useForm<z.infer<typeof forgetPasswordValidationSchema>>({
        resolver: zodResolver(forgetPasswordValidationSchema),
        defaultValues: {
            email: "",
        },
    });

    async function onSubmit(
        values: z.infer<typeof forgetPasswordValidationSchema>
    ) {
        try {
            await forgetPassword(values.email);

            form.reset();
            sessionStorage.setItem("otpAllowed", "true");
            navigate("/otp");
        } catch (error: any) {
            setError(error.response?.data?.message);
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 w-full"
            >
                <FormInput
                    form={form}
                    fieldName="email"
                    label="Email"
                    placeholder="kneeDue@untitledui.com"
                    Icon={Mail}
                />

                <AppButton
                    type="submit"
                    className="bg-blue-700"
                    isSubmitting={form.formState.isSubmitting}
                >
                    Reset Password
                </AppButton>
            </form>
        </Form>
    );
}

export default ForgetPasswordForm;
