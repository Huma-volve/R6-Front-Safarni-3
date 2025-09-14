import { Dot, Star } from "lucide-react";

import Card from "../shared/Card"
import type { ITour } from "@/types";
import LikeButton from './LikeButton';


function TourCard({ tour }: ITour) {
    return (
        <Card
            key={tour.id}
            direction="vertical"
            imgSrc={tour.image}
            imgAlt={tour.title}
            tourId={tour.id}
        >
            <LikeButton id={tour.id}/>

            <div className="flex items-start justify-between gap-2">
                <h2 className="font-semibold text-sm">{tour.title}</h2>
                <div className="flex items-center gap-1 text-sm text-gray-600 font-medium">
                    <Star
                        size={18}
                        className="fill-[#FCBA42] stroke-[#FCBA42]"
                    />
                    <span>{tour.rating.toFixed(1)}</span>
                    <span>({tour.views})</span>
                </div>
            </div>

            <div className="flex items-center justify-between gap-1">
                <p className="text-gray-500">Pickup Available</p>
                <div className="flex items-center gap-1">
                    <Dot className="text-blue-700" strokeWidth={10} />
                    <p className="text-gray-500">{5} Days</p>
                </div>
            </div>

            <p className="text-gray-500 font-medium">
                From <span className="text-blue-500">{tour.price}</span> Per
                Person
            </p>
        </Card>
    );
}

export default TourCard;
