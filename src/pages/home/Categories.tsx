import type { ICategory } from "@/types";
import SectionContainer from "./components/SectionContainer";
import CategoryItem from "./components/CategoryItem";
import flight from "@/assets/images/flight.jpg";
import cars from "@/assets/images/cars.jpg";
import tours from "@/assets/images/tours.jpg";
import hotel from "@/assets/images/hotel.jpg";

const categories = [
    {
        id: 1,
        image: flight,
        title: "Flight",
        path: "/flight",
    },
    {
        id: 2,
        image: cars,
        title: "Cars",
        path: "/cars",
    },
    {
        id: 3,
        image: tours,
        title: "Tours",
        path: "/tours",
    },
    {
        id: 4,
        image: hotel,
        title: "Hotel",
        path: "/hotel",
    },
];

function Categories() {
    return (
        <SectionContainer sectionTitle="Categories">
            <ul className="flex justify-around gap-6">
                {categories.map((category: ICategory) => (
                    <CategoryItem category={category} key={category.id} />
                ))}
            </ul>
        </SectionContainer>
    );
}

export default Categories;
