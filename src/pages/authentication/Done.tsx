import { Link } from "react-router";
import { Check } from "lucide-react";

import doneImg from "@/assets/images/done.png";
import ImageSec from "./components/ImageSec";
import ContentSecContainer from "./components/ContentSecContainer";
import PageTitle from "./components/PageTitle";
import AppButton from "../../components/shared/AppButton";

function Done() {
    return (
        <>
            <ImageSec src={doneImg} alt="done" />
            <ContentSecContainer>
                <PageTitle
                    title="password reset"
                    subTitle="your password has been  successfully reset click below to log in magically."
                    Icon={Check}
                    iconStyle="text-white bg-[#31C48D] rounded-full p-2 w-12 h-12"
                />
                <Link to="/login" className="w-full">
                    <AppButton>Log In</AppButton>
                </Link>
            </ContentSecContainer>
        </>
    );
}

export default Done;
