import { Lock, MoveLeft } from "lucide-react";
import { Link } from "react-router";

import ContentSecContainer from "./components/ContentSecContainer";
import ImageSection from "./components/ImageSec";
import forgetPasswordImg from "@/assets/images/forget-password.png";
import PageTitle from "./components/PageTitle";
import NewPasswordForm from "./components/NewPasswordForm";

function NewPassword() {
    return (
        <>
            <ImageSection src={forgetPasswordImg} alt="reset password" />
            <ContentSecContainer>
                <PageTitle
                    title="set new password"
                    subTitle="Your New Password Must be Different to Previously Used Password"
                    Icon={Lock}
                />
                <NewPasswordForm />
                <Link to="/login" className="flex items-center gap-2">
                    <MoveLeft />
                    Back To Log In
                </Link>
            </ContentSecContainer>
        </>
    );
}

export default NewPassword;
