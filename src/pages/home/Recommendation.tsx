import { MapPin, Star } from "lucide-react";

import type { ITour } from "@/types";
import SectionContainer from "./components/SectionContainer";
import Card from "../../components/shared/Card";
import { useGetRecommendedTours } from "@/lib/queries/queries";

function Recommendation() {
    const { data: tours, isPending: isLoadingTours } = useGetRecommendedTours();

    return (
        <SectionContainer sectionTitle="Recommendation">
            {isLoadingTours ? (
                <p>Loading...</p>
            ) : (
                <div className="flex justify-between gap-6">
                    {tours.slice(0, 4).map((tour: ITour) => (
                        <Card
                            direction="vertical"
                            imgSrc={tour.image}
                            imgAlt={tour.title}
                            tourId={tour.id}
                            key={tour.id}
                        >
                            <div className="flex items-start justify-between gap-2">
                                <p className="text-sm">{tour.title}</p>
                                <div className="flex items-center gap-1">
                                    <Star
                                        size={18}
                                        className="fill-[#FCBA42] stroke-[#FCBA42]"
                                    />
                                    <span className="text-sm">
                                        {tour.rating.toFixed(1)}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-1">
                                <MapPin size={18} className="text-blue-700" />
                                <span className="text-gray-400 text-sm">
                                    {tour.location}
                                </span>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </SectionContainer>
    );
}

export default Recommendation;
