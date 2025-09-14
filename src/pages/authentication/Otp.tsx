import { useState } from "react";
import { Mail } from "lucide-react";
import { Navigate, useLocation, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";

import forgetPasswordImg from "@/assets/images/forget-password.png";
import ImageSec from "./components/ImageSec";
import ContentSecContainer from "./components/ContentSecContainer";
import PageTitle from "./components/PageTitle";
import CountDown from "./components/CountDown";
import OtpInput from "./components/OtpInput";
import InlineLinkText from "./components/InlineLinkText";
import AppButton from "../../components/shared/AppButton";
import { OTPValidationSchema } from "@/lib/validation";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { sendOTP } from "@/lib/api/api";
import { useAuthContext } from "@/context/AuthContext";
import ErrorMsg from "@/components/shared/ErrorMsg";

function Otp() {
    const [error, setError] = useState("");
    const [time, setTime] = useState(30);

    const { setToken } = useAuthContext();

    const navigate = useNavigate();

    const location = useLocation();
    const email = location.state?.email;

    const form = useForm<z.infer<typeof OTPValidationSchema>>({
        resolver: zodResolver(OTPValidationSchema),
        defaultValues: {
            otp: "",
        },
    });

    const otpAllowed = sessionStorage.getItem("otpAllowed");

    if (otpAllowed !== "true") return <Navigate to="/forget-password" />;

    async function onSubmit(values: z.infer<typeof OTPValidationSchema>) {
        try {
            const result = await sendOTP(values.otp, email);

            const { token } = result.data;
            if (!token)
                return setError(result.message || "Email verification failed");

            form.reset();
            setToken(token);
            navigate("/new-password");
        } catch (error: unknown) {
            if (axios.isAxiosError(error))
                setError(error.response?.data?.message);
            else setError("An unexpected error occurred.");
        }
    }

    return (
        <>
            <ImageSec src={forgetPasswordImg} alt="forget password" />
            <ContentSecContainer>
                <PageTitle
                    title="Verify Code"
                    subTitle="Please enter the code we just sent to email"
                    Icon={Mail}
                />
                <p className="-mt-4">{email}</p>
                <CountDown time={time} setTime={setTime} />
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        {error && <ErrorMsg msg={error} />}

                        <FormField
                            control={form.control}
                            name="otp"
                            render={({ field }) => (
                                <FormItem className="flex flex-col items-center justify-center text-center">
                                    <FormControl>
                                        <OtpInput field={field} time={time} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <InlineLinkText
                            text="OTP not receive?"
                            link="send again"
                            linkPath="/otp"
                        />
                        <AppButton>Verify</AppButton>
                    </form>
                </Form>
            </ContentSecContainer>
        </>
    );
}

export default Otp;
