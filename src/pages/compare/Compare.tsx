import { useState } from "react";
import { useDebounce } from "use-debounce";

import GoBackButton from "@/components/shared/GoBackButton";
import SearchInput from "@/components/shared/SearchInput";
import ToursResults from "@/components/shared/ToursResults";

function ComparePage() {
    const [searchKey, setSearchKey] = useState("");
    const [searchValue] = useDebounce(searchKey, 500);

    return (
        <main>
            <header className="flex items-center gap-2 sm:gap-4">
                <GoBackButton />
                <SearchInput
                    searchKey={searchKey}
                    onSetSearchKey={setSearchKey}
                />
            </header>
            {searchKey && (
                <ToursResults
                    filter={{ search: searchValue }}
                    tourCardType="preview"
                    showPlans={true}
                />
            )}
        </main>
    );
}

export default ComparePage;
