import { Star } from "lucide-react";

import Card from "../../components/shared/Card";
import SectionContainer from "./components/SectionContainer";
import type { ITour } from "@/types";
import { useGetTrendingTours } from "@/lib/queries/queries";

function AvailableTours() {
    const {
        data: trendingTours,
        isPending: isLoadingTrendingTours,
        error,
    } = useGetTrendingTours();

    return (
        <SectionContainer sectionTitle="Available Tours">
            <div className="flex flex-wrap justify-between gap-6">
                {isLoadingTrendingTours ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>
                        Opps something went wrong cannot get available tours
                        right now. Please try again later.
                    </p>
                ) : (
                    trendingTours.slice(0, 4).map((tour: ITour) => (
                        <Card
                            direction="horizontal"
                            imgSrc={tour.image}
                            imgAlt={tour.title}
                            tourId={tour.id}
                            key={tour.id}
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-500 font-medium">
                                    Full Day Tour
                                </p>
                                <div className="flex items-center gap-1">
                                    <Star
                                        size={18}
                                        className="fill-[#FCBA42] stroke-[#FCBA42]"
                                    />
                                    <span className="text-sm">
                                        {(4.3).toFixed(1)}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-gray-900 font-medium text-sm sm:text-base">
                                {tour.location}
                            </h3>

                            <p className="text-gray-500 font-medium text-sm sm:text-base">
                                From{" "}
                                <span className="text-blue-500">
                                    {tour.price}
                                </span>{" "}
                                Per Person
                            </p>
                        </Card>
                    ))
                )}
            </div>
        </SectionContainer>
    );
}

export default AvailableTours;
