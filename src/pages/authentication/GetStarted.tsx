import { Link } from "react-router";

import getStartedImg from "@/assets/images/get-started.png";
import ImageSec from "./components/ImageSec";
import ContentSecContainer from "./components/ContentSecContainer";
import PageTitle from "./components/PageTitle";
import AppButton from "../../components/shared/AppButton";
import Logo from "./components/Logo";

function GetStarted() {
    return (
        <>
            <ImageSec src={getStartedImg} alt="get started" />
            <ContentSecContainer>
                <div className="block sm:hidden">
                    <Logo imgWidth="w-1/2" />
                </div>
                <PageTitle
                    title="Welcome"
                    subTitle="Safarni is your all-in-one travel guide. Discover
                    destinations, compare trip prices, book flights, hotels, car
                    rentals, and local tours — all through one interactive
                    experience."
                />
                <Link to="/signup" className="w-full">
                    <AppButton>Sign Up</AppButton>
                </Link>
                <Link to="/login" className="w-full">
                    <AppButton variant="outline">Log In</AppButton>
                </Link>
            </ContentSecContainer>
        </>
    );
}

export default GetStarted;
