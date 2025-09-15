import ContentSecContainer from "./components/ContentSecContainer";
import ImageSection from "./components/ImageSec";
import loginImg from "@/assets/images/login.png";
import LoginForm from "./components/LoginForm";
import PageTitle from "./components/PageTitle";
import InlineLinkText from "./components/InlineLinkText";

function Login() {
    return (
        <>
            <ImageSection src={loginImg} alt="login" />
            <ContentSecContainer>
                <PageTitle
                    title="Welcome Again"
                    subTitle="welcome back! please fill your Data"
                />
                <LoginForm />

                <InlineLinkText
                    text="Don't have an account?"
                    link="Sign Up"
                    linkPath="/signup"
                />
            </ContentSecContainer>
        </>
    );
}

export default Login;
