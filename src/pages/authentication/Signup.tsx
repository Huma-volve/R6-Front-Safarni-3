import ContentSecContainer from "./components/ContentSecContainer";
import ImageSection from "./components/ImageSec";
import signupImg from "@/assets/images/signup.png";
import PageTitle from "./components/PageTitle";
import SignupForm from "./components/SignupForm";
import InlineLinkText from "./components/InlineLinkText";

function Signup() {
    return (
        <>
            <ImageSection src={signupImg} alt="login" />
            <ContentSecContainer>
                <PageTitle
                    title="Welcome Again"
                    subTitle="welcome back! please fill your Data"
                />
                <SignupForm />
                <InlineLinkText
                    text="Already have an account?"
                    link="Log In"
                    linkPath="/login"
                />
            </ContentSecContainer>
        </>
    );
}

export default Signup;
