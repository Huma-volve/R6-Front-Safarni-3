import { Mail } from "lucide-react";
import { Navigate } from "react-router";

import forgetPasswordImg from "@/assets/images/forget-password.png";
import ImageSec from "./components/ImageSec";
import ContentSecContainer from "./components/ContentSecContainer";
import PageTitle from "./components/PageTitle";
import CountDown from "./components/CountDown";
import OtpInput from "./components/OtpInput";
import InlineLinkText from "./components/InlineLinkText";
import AppButton from "./components/AppButton";

function Otp() {
    const otpAllowed = sessionStorage.getItem("otpAllowed");

    if (otpAllowed !== "true") return <Navigate to="/forget-password" />;

    return (
        <>
            <ImageSec src={forgetPasswordImg} alt="forget password" />
            <ContentSecContainer>
                <PageTitle
                    title="Verify Code"
                    subTitle="Please enter the code we just sent to email"
                    Icon={Mail}
                />
                <CountDown />
                <OtpInput />
                <InlineLinkText
                    text="OTP not receive?"
                    link="send again"
                    linkPath="/"
                />
                <AppButton className="bg-blue-700">Verify</AppButton>
            </ContentSecContainer>
        </>
    );
}

export default Otp;
