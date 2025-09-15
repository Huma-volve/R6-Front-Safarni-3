import { useState } from "react";
import { useDebounce } from "use-debounce";
import { useSearchParams } from "react-router";

import GoBackButton from "@/components/shared/GoBackButton";
import { useGetSearchLocation } from "@/lib/queries/queries";
import SearchLocationItem from "./components/SearchLocationItem";
import SearchInput from "@/components/shared/SearchInput";
import NoResults from "@/components/shared/NoResults";
import Loader from "@/components/shared/Loader";
import ToursResults from "@/components/shared/ToursResults";

function Search() {
    const [searchKey, setSearchKey] = useState("");

    const [searchParams] = useSearchParams();
    const selectedLocation = searchParams.get("search");

    const [searchValue] = useDebounce(searchKey, 500);

    const { isPending: isLoadingSearchResults, data: searchResults } =
        useGetSearchLocation(searchValue);

    let content = (
        <div className="flex flex-col gap-2 mt-6">
            {isLoadingSearchResults ? (
                <Loader />
            ) : searchResults.length < 1 ? (
                <NoResults />
            ) : (
                <ul>
                    {searchResults.map((location: string, i: number) => (
                        <SearchLocationItem
                            location={location}
                            key={i}
                            onSetSearchKey={setSearchKey}
                        />
                    ))}
                </ul>
            )}
        </div>
    );

    if (selectedLocation && !searchKey)
        content = <ToursResults filter={{ search: selectedLocation }} />;

    return (
        <main className="p-4 lg:p-0 container mx-auto overflow-x-hidden w-100vw">
            <header className="flex items-center gap-2 sm:gap-4">
                <GoBackButton />
                <SearchInput
                    searchKey={searchKey}
                    onSetSearchKey={setSearchKey}
                />
            </header>

            {content}
        </main>
    );
}

export default Search;
