import { SearchCheck } from "lucide-react";

import { Input } from "../ui/input";
import type { Dispatch, SetStateAction } from "react";

type SearchInputProps = {
    searchKey: string;
    onSetSearchKey: Dispatch<SetStateAction<string>>;
};

function SearchInput({ searchKey, onSetSearchKey }: SearchInputProps) {
    return (
        <div className="flex-1 relative">
            <SearchCheck
                className="absolute left-2 top-1/2 -translate-y-1/2 text-blue-500"
                size={18}
            />
            <Input
                className="pl-8 caret-blue-500"
                placeholder="Add location"
                value={searchKey}
                onChange={(e) => onSetSearchKey(e.target.value)}
            />
        </div>
    );
}

export default SearchInput;
