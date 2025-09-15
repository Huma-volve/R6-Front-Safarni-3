import type { ReactNode } from "react";
import { FormLabel } from "../ui/form";

type PillLabelProps = {
    children: ReactNode;
    isSelected: boolean;
};

function PillLabel({ children, isSelected }: PillLabelProps) {
    return (
        <FormLabel
            className={`cursor-pointer text-gray-500 px-4 py-2 rounded-full border-2 border-blue-50 flex items-center gap-1 focus:border-blue-700 ${
                isSelected ? "bg-blue-50 text-blue-700" : ""
            }`}
        >
            {children}
        </FormLabel>
    );
}

export default PillLabel;
