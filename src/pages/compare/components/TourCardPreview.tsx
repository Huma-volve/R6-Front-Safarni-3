import Card from "@/components/shared/Card";
import type { ITour } from "@/types";

type TourCardPreviewProps = {
    tour: ITour;
};

function TourCardPreview({ tour }: TourCardPreviewProps) {
    return (
        <Card
            key={tour.id}
            direction="horizontal"
            imgSrc={tour.image}
            imgAlt={tour.title}
            tourId={tour.id}
        >
            <div className="flex flex-col items-start justify-between gap-2">
                <h2 className="font-semibold text-sm">{tour.title}</h2>
                <p className="text-sm text-gray-500">
                    6:00 PM - 9:00 PM | {tour.price} EGP
                </p>
                <p className="text-sm text-gray-500">{tour.description}</p>
            </div>
        </Card>
    );
}

export default TourCardPreview;
