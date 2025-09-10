import { Check } from "lucide-react";

type PasswordGuideProps = {
    children: string;
};

function PasswordGuide({ children }: PasswordGuideProps) {
    return (
        <div className="flex gap-2 items-center">
            <Check
                size={18}
                className="text-white bg-gray-400 rounded-full p-1"
            />
            <p className="text-gray-500 text-sm">{children}</p>
        </div>
    );
}

export default PasswordGuide;
