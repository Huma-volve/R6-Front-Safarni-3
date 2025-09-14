import { Heart } from "lucide-react";
import { useState } from "react";

function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <button
            className="absolute top-5 right-5 bg-white p-2 rounded-full cursor-pointer z-10"
            onClick={() => setIsLiked((liked) => !liked)}
        >
            <Heart
                className={`text-gray-400 ${
                    isLiked ? "fill-[#F05252] stroke-[#F05252]" : ""
                }`}
                size={18}
            />
        </button>
    );
}

export default LikeButton;
