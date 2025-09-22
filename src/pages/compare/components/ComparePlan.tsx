import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useGetTourDetails } from "@/lib/queries/queries";
import type { ITour } from "@/types";
import PlanListItem from "./PlanListItem";
import Loader from "@/components/shared/Loader";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";

type ComparePlanProps = {
    tour: ITour;
    isSelected: boolean;
};

function ComparePlan({ tour, isSelected }: ComparePlanProps) {
    const { isPending: isLoadingTourDetails, data: tourDetails } =
        useGetTourDetails(tour.id);

    if (isLoadingTourDetails) return <Loader />;

    return (
        <FormItem>
            <FormControl>
                <RadioGroupItem
                    value={tourDetails.id}
                    id={tourDetails.id}
                    className="hidden"
                />
            </FormControl>
            <FormLabel htmlFor={tourDetails.id}>
                <Card
                    className={`w-72 h-full bg-gray-100 ${
                        isSelected ? "border-blue-500" : ""
                    }`}
                >
                    <CardHeader>
                        <CardTitle className="font-normal mb-2">
                            {tourDetails.title}
                        </CardTitle>
                        <CardDescription>
                            <span className="text-2xl text-gray-950 font-semibold">
                                {tourDetails.price} EGP
                            </span>{" "}
                            /person
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-1">
                            <PlanListItem
                                label="Duration"
                                value={`${tourDetails.duration} hours`}
                            />
                            <PlanListItem
                                label="Highlights"
                                value={tourDetails.highlights.join(", ")}
                            />
                            <PlanListItem
                                label="Availability"
                                value={
                                    tourDetails.slots.length > 0
                                        ? "Available"
                                        : "Unavailable"
                                }
                            />
                            <PlanListItem
                                label="Guide"
                                value={tourDetails.guide}
                            />
                            <PlanListItem
                                label="Transportation"
                                value={tourDetails.transportation}
                            />
                        </ul>
                    </CardContent>
                </Card>
            </FormLabel>
        </FormItem>
    );
}

export default ComparePlan;
