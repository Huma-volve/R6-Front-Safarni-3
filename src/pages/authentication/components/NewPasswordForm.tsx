import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Lock } from "lucide-react";

import { Form } from "@/components/ui/form";
import { newPasswordValidationSchema } from "@/lib/validation";
import FormInput from "./FormInput";
import PasswordGuide from "./PasswordGuide";
import AppButton from "./AppButton";
import { useNavigate } from "react-router";
import { resetPassword } from "@/lib/api/api";

function NewPasswordForm() {
    const navigate = useNavigate();

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
        const result = await resetPassword(
            values.password,
            values.confirmPassword
        );

        if (result.status !== 200) console.log(result.data);
        else {
            form.reset();
            navigate("/done");
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
                    fieldName="password"
                    label="Password"
                    placeholder="***********"
                    Icon={Lock}
                />

                <FormInput
                    form={form}
                    fieldName="confirmPassword"
                    label="Confirm Password"
                    placeholder="***********"
                    Icon={Lock}
                />
                <div>
                    <PasswordGuide>must be at least 8 characters</PasswordGuide>
                    <PasswordGuide>
                        must contain one special character
                    </PasswordGuide>
                </div>
                <AppButton type="submit" className="bg-blue-700">
                    Reset Password
                </AppButton>
            </form>
        </Form>
    );
}

export default NewPasswordForm;
