import { Link } from "react-router";

type InlineLinkTextProps = {
    text: string;
    link: string;
    linkPath: string;
};

function InlineLinkText({ text, link, linkPath }: InlineLinkTextProps) {
    return (
        <div className="flex gap-2 mx-auto">
            <p>{text}</p>
            <Link to={linkPath} className="text-blue-700 font-semibold">
                {link}
            </Link>
        </div>
    );
}

export default InlineLinkText;
