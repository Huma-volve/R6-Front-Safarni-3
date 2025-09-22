import { useState } from "react";

import GoBackButton from "@/components/shared/GoBackButton";
import SearchInput from "@/components/shared/SearchInput";
import ToursResults from "@/components/shared/ToursResults";

function InternalTour() {
    const [searchKey, setSearchKey] = useState("");

    return (
        <main>
            <header className="flex items-center gap-2 sm:gap-4">
                <GoBackButton />
                <SearchInput
                    searchKey={searchKey}
                    onSetSearchKey={setSearchKey}
                />
            </header>
            <ToursResults filter={{ search: searchKey }} />;
        </main>
    );
}

export default InternalTour;
