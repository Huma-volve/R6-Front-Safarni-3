import { Image } from "lucide-react";

const ActivityCard = ({ title }: { title: string }) => {
    return (
        <article>
            <div className="h-[260px] mb-4 bg-gray-100 rounded-xl flex justify-center items-center">
                <Image />
            </div>
            <p className="text-lg font-medium">{title}</p>
        </article>
    );
};

export default ActivityCard;
