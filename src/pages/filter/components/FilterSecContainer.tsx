import type { ReactNode } from "react";

type FilterSectionProps = {
    title: string;
    children: ReactNode;
    addSeparator?: boolean;
    isMultiSelect?: boolean;
};

function FilterSecContainer({
    title,
    children,
    addSeparator = true,
    isMultiSelect = false,
}: FilterSectionProps) {
    return (
        <section className="my-6">
            <header className="flex items-center gap-2 mb-6">
                <h1 className="font-medium">{title}</h1>
                {isMultiSelect && <p className="text-gray-500">Multi Select</p>}
            </header>
            {children}
            {addSeparator && <hr className="my-6" />}
        </section>
    );
}

export default FilterSecContainer;
