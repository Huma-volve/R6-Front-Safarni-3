import { useContext, useState, useEffect } from "react";
import { FavoriteContext } from "@/context/FavoriteContextProvider";
import { Heart } from "lucide-react";

type LikeButtonProps = {
    id: number;
};

function LikeButton({ id }: LikeButtonProps) {
    const { addToFavorites, getFavorites, deleteFromFavorites, favorites } =
        useContext(FavoriteContext);

    const [isLiked, setIsLiked] = useState<boolean>(
        favorites?.some((item) => item.id === id) || false
    );

    useEffect(() => {
        setIsLiked(favorites?.some((item) => item.id === id) || false);
    }, [favorites, id]);

    async function handleLikeToggle(): Promise<void> {
        if (isLiked) {
            await deleteFromFavorites(id);
        } else {
            await addToFavorites(id);
        }

        setIsLiked(!isLiked);
        await getFavorites();
    }

    return (
        <button
            className="absolute top-5 right-5 bg-white p-2 rounded-full cursor-pointer z-10"
            onClick={handleLikeToggle}
        >
            <Heart
                className={
                    isLiked ? "text-[#F05252] fill-[#F05252]" : "text-gray-400"
                }
                size={18}
            />
        </button>
    );
}

export default LikeButton;
