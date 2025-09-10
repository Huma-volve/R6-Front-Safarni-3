import { KeyRound } from "lucide-react";

import forgetPasswordImg from "@/assets/images/forget-password.png";
import ImageSec from "./components/ImageSec";
import ContentSecContainer from "./components/ContentSecContainer";
import PageTitle from "./components/PageTitle";
import ForgetPasswordForm from "./components/ForgetPasswordForm";

function ForgetPassword() {
    return (
        <>
            <ImageSec src={forgetPasswordImg} alt="forget password" />
            <ContentSecContainer>
                <PageTitle
                    title="Forgot Password?"
                    subTitle="please enter your email to reset that password"
                    Icon={KeyRound}
                />
                <ForgetPasswordForm />
            </ContentSecContainer>
        </>
    );
}

export default ForgetPassword;
