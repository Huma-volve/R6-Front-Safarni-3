import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

import { Form } from "@/components/ui/form";
import { forgetPasswordValidationSchema } from "@/lib/validation";
import FormInput from "./FormInput";
import AppButton from "../../../components/shared/AppButton";
import { forgetPassword } from "@/lib/api/api";
import ErrorMsg from "../../../components/shared/ErrorMsg";
import { toast } from "sonner";

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
            navigate("/otp", { state: { email: values.email } });
            toast("You otp is 11111");
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
                    fieldName="email"
                    Icon={Mail}
                    label="Email"
                    placeholder="kneeDue@untitledui.com"
                    type="email"
                />

                <AppButton
                    type="submit"
                    isSubmitting={form.formState.isSubmitting}
                >
                    Reset Password
                </AppButton>
            </form>
        </Form>
    );
}

export default ForgetPasswordForm;
