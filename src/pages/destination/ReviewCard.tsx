import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
import { Avatar } from "@radix-ui/react-avatar";

type Review = {
    id: number;
    tour_id: number;
    user_id: number;
    rating: number;
    review: string;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
    user: User;
};
type User = {
    id: number;
    name: string;
};

const ReviewCard = ({ data }: { data: Review }) => {
    function monthsSince(dateString: string): number {
        const givenDate = new Date(dateString);
        const now = new Date();

        let months =
            (now.getFullYear() - givenDate.getFullYear()) * 12 +
            (now.getMonth() - givenDate.getMonth());

        if (now.getDate() < givenDate.getDate()) {
            months -= 1;
        }

        return months;
    }

    return (
        <div className="border-[#D1D3DB] border-[1px] rounded-lg p-2 text-lg">
            <div className="font-medium flex justify-between items-center gap-2 mb-4">
                <div className="flex gap-4">
                    <Avatar className="size-10 rounded-full">
                        <AvatarImage
                            className="rounded-full"
                            src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png"
                            alt="Avatar"
                        />
                        <AvatarFallback className="text-xs">U</AvatarFallback>
                    </Avatar>
                    <p className="capitalize">{data.user.name}</p>
                </div>
                <p className="text-base">
                    {monthsSince(data.created_at)} months ago
                </p>
            </div>
            <Rating value={data.rating}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <RatingButton
                        key={index}
                        className="text-yellow-400 h-5 w-5"
                    />
                ))}
            </Rating>
            <p>{data.review}</p>
        </div>
    );
};

export default ReviewCard;
