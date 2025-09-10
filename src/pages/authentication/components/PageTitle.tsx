import type { LucideIcon } from "lucide-react";

type PageTitleProps = {
    title: string;
    subTitle: string;
    Icon?: LucideIcon;
    iconStyle?: string;
};

function PageTitle({ title, subTitle, Icon, iconStyle }: PageTitleProps) {
    return (
        <div className="text-center flex flex-col gap-2 items-center">
            {Icon && <Icon className={`text-gray-400 mx-auto ${iconStyle}`} />}
            <h1 className="text-lg md:text-xl font-semibold text-gray-900">
                {title}
            </h1>
            <p className="text-sm md:text-base text-gray-600">{subTitle}</p>
        </div>
    );
}

export default PageTitle;
