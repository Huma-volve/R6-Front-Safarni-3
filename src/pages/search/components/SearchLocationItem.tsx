import { MapPin } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { useSearchParams } from "react-router";

type SearchLocationItemProps = {
    location: string;
    onSetSearchKey: Dispatch<SetStateAction<string>>;
};

function SearchLocationItem({
    location,
    onSetSearchKey,
}: SearchLocationItemProps) {
    const [, setSearchParams] = useSearchParams();

    function handleSelectLocation() {
        setSearchParams(`?search=${location}`);
        onSetSearchKey("");
    }

    return (
        <li className="hover:bg-gray-50 transition-all p-2">
            <button
                className="flex items-center gap-4 w-full"
                onClick={handleSelectLocation}
            >
                <MapPin
                    size={50}
                    strokeWidth={1}
                    className="text-blue-700 bg-blue-50 p-2"
                />
                <p className="text-sm">{location}</p>
            </button>
        </li>
    );
}

export default SearchLocationItem;
