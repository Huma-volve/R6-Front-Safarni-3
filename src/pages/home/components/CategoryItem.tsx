import { useState } from "react";

import type { ICategory } from "@/types";
import placeholderImg from "@/assets/images/placeholder_view.png";
import { Link } from "react-router";

type CategoryItemProps = {
    category: ICategory;
};

function CategoryItem({ category }: CategoryItemProps) {
    const { image, title, path } = category;
    const [img, setImg] = useState(image);

    return (
        <li>
            <Link to={path} className="flex flex-col items-center gap-3">
                <div className="rounded-full w-32 sm:w-48 h-32 sm:h-48 overflow-hidden">
                    <img
                        src={img}
                        alt={title}
                        className="w-full h-full object-cover object-center"
                        onError={() => setImg(placeholderImg)}
                    />
                </div>
                <p className="text-blue-600 font-medium text-base sm:text-lg">
                    {title}
                </p>
            </Link>
        </li>
    );
}

export default CategoryItem;
