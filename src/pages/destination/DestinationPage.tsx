import { NoItemFound } from "@/components/shared";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
import ActivityCard from "./ActivityCard";
import ReviewCard from "./ReviewCard";
import AppButton from "@/components/shared/AppButton";
import GoBackButton from "@/components/shared/GoBackButton";

type Tour = {
    id: number;
    title: string;
    description: string;
    image: string;
    location: string;
    price: string;
    guide: string;
    duration: number;
    highlights: string[];
};

type User = {
    id: number;
    name: string;
};

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

type TourReviewsResponse = {
    tour_id: number;
    total_reviews: number;
    reviews: Review[];
};

const DestinationPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [tourData, setTourData] = useState<Tour | null>(null);
    const [reviews, setReviews] = useState<TourReviewsResponse | null>(null);
    const [averageRating, setAverageRating] = useState<number>(0);

    function getAverageRating(data: TourReviewsResponse | null): number {
        if (!data || data.reviews.length === 0) return 0;
        const sum = data.reviews.reduce(
            (acc, review) => acc + review.rating,
            0
        );
        const result = sum / data.reviews.length;
        return result;
    }

    function bookingHandler() {
        // Handling payment throug context
        navigate("/checkout?booking_type=tour", {
            state: { booking_id: tourData?.id, booking_type: "tour" },
        });
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tourRes = await fetch(
                    `https://round5-safarnia.huma-volve.com/api/tours/${params.id}`
                );

                if (!tourRes.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await tourRes.json();

                setTourData(data.data);
            } catch {
                navigate("not-found");
            }
        };

        const fetchReviews = async () => {
            try {
                const reviewsRes = await fetch(
                    `https://round5-safarnia.huma-volve.com/api/tours/${params.id}/reviews`
                );

                if (!reviewsRes.ok) {
                    throw new Error("Failed to fetch reviews");
                }

                const reviewsData = await reviewsRes.json();

                setReviews(reviewsData.data);
            } catch {
                console.error("Error fetching reviews");
            }
        };

        fetchData();
        fetchReviews();
    }, []);

    useEffect(() => {
        setAverageRating(getAverageRating(reviews));
    }, [reviews]);

    return (
        <>
            <div className="m-auto w-full max-w-[1272px] px-4">
                <GoBackButton />

                <div className="mb-10 flex flex-col gap-4">
                    <img
                        src={tourData?.image}
                        alt={tourData?.title}
                        className="h-[480px] w-full object-cover mb-2 rounded-xl"
                    />
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <h1 className="text-xl font-semibold text-gray-900">
                            {tourData?.title}
                        </h1>
                        <div className="flex items-center gap-1">
                            <Rating value={averageRating}>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <RatingButton
                                        key={index}
                                        className="text-yellow-400 h-5 w-5"
                                    />
                                ))}
                            </Rating>
                            <p className="text-[#4B4F63] font-semibold">
                                {averageRating}
                                <span className="font-[#6B6E80]">
                                    ({reviews?.total_reviews})
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row justify-between text-lg text-gray-600 font-medium">
                        <p className="font-semibold">{tourData?.guide}</p>
                        <p>{tourData?.duration} Days</p>
                        <p className="text-gray-500">{tourData?.location}</p>
                    </div>
                </div>

                <div className="mb-10">
                    <h2 className="font-medium text-xl mb-4">Top Activities</h2>
                    <ul className="flex md:flex-row flex-col justify-between gap-6">
                        {tourData?.highlights.map((item) => (
                            <li key={item} className="w-full">
                                <ActivityCard title={item} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-10">
                    <h2 className="font-medium text-lg mb-4">
                        Best Time to Visit
                    </h2>
                    <p className="border-[#D1D3DB] border-[1px] rounded-lg p-2">
                        {tourData?.description}
                    </p>
                </div>
                <div>
                    <h2 className="font-medium text-lg mb-4">
                        Gallery<span className="text-blue-700">(0)</span>
                    </h2>
                    <NoItemFound text="Images" />
                </div>
                <div>
                    <h2 className="font-medium text-lg mb-4">Reviews</h2>
                    {reviews && reviews?.reviews?.length > 0 ? (
                        <ul className="grid md:grid-cols-2 gap-6">
                            {reviews?.reviews?.map((review: Review) => (
                                <li key={review.id}>
                                    <ReviewCard data={review} />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <NoItemFound text="reviews" />
                    )}
                </div>
            </div>
            <div className="py-12 mt-10 shadow-[0_-10px_15px_0px_theme(colors.gray.200)]">
                <div className="grid md:grid-cols-2 gap-4 justify-between items-center m-auto w-full max-w-[1272px] px-4">
                    <p className="text-lg">
                        Total Price:{" "}
                        <span className="text-blue-700 font-bold">
                            ${tourData?.price}
                        </span>
                        <span className="text-lg">/night</span>
                    </p>
                    <AppButton onClick={bookingHandler}>Book Now</AppButton>
                </div>
            </div>
        </>
    );
};

export default DestinationPage;
