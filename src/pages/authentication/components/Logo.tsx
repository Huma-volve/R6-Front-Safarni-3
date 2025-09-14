import logo from "@/assets/images/logo.png";

type LogoProps = {
    imgWidth?: string;
};

function Logo({ imgWidth = "w-14" }: LogoProps) {
    return (
        <div className="flex flex-col items-center gap-4">
            <img src={logo} alt="safarni's logo" className={`${imgWidth}`} />
            <p className="font-semibold text-blue-700">Safarni</p>
        </div>
    );
}

export default Logo;
