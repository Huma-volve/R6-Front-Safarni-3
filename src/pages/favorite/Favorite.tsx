import { useContext, useEffect, useState } from "react";
import { FavoriteContext } from "@/context/FavoriteContextProvider";
import TourCardHighlight from "@/components/shared/TourCardHighlight";
import Loader from "@/components/shared/Loader";
import type { ITour } from "@/types";
import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";

export default function Favorite() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { getFavorites, favorites } = useContext(FavoriteContext);

    useEffect(() => {
        getFavList();
    }, []);

    async function getFavList(): Promise<void> {
        setIsLoading(true);
        await getFavorites();
        setIsLoading(false);
    }

    return (
        <>
            <div className="container mx-auto px-3 lg:px-20">
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <div className="w-14 h-14 bg-gray-100 rounded-full my-10 flex justify-center items-center">
                            <ChevronLeft />
                        </div>
                    </Link>
                    <h1 className="font-medium text-xl">Favorite</h1>
                    <span></span>
                </div>
                {!favorites?.length && !isLoading && (
                    <div className="text-center p-10 text-red-400 font-medium">
                        Not added to your favorites yet
                    </div>
                )}

                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
                        {favorites?.map((tour: ITour) => (
                            <TourCardHighlight key={tour.id} tour={tour} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
