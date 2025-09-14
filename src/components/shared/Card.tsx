import { useState, type ReactNode } from "react";

import placeholderImg from "@/assets/images/placeholder_view.png";
import { Link } from "react-router";

type CardProps = {
    direction: "horizontal" | "vertical";
    imgSrc: string;
    imgAlt: string;
    tourId: number;
    children: ReactNode;
};

function Card({ direction, imgSrc, imgAlt, tourId, children }: CardProps) {
    const [img, setImg] = useState(imgSrc);

    return (
        <div
            className={`w-full relative flex ${
                direction === "vertical"
                    ? "flex-col min-w-60 max-w-72"
                    : "max-h-30 max-w-xl"
            } rounded-lg p-2 sm:p-3 shadow-lg gap-2 mx-auto`}
        >
            <Link
                to={`/tours/${tourId}`}
                className={`overflow-hidden rounded-md ${
                    direction === "vertical" ? "h-60" : "w-20 sm:w-40"
                }`}
            >
                <img
                    src={img}
                    alt={imgAlt}
                    className=" w-full h-full object-cover object-center"
                    onError={() => setImg(placeholderImg)}
                />
            </Link>
            <div className="flex-1 flex flex-col justify-between gap-1 mt-2">
                {children}
            </div>
        </div>
    );
}

export default Card;
