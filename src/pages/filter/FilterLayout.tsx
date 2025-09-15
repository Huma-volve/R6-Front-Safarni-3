import type { ReactNode } from "react";

import GoBackButton from "@/components/shared/GoBackButton";

type FilterLayoutProps = {
    children: ReactNode;
};

function FilterLayout({ children }: FilterLayoutProps) {
    return (
        <div className="p-4 lg:p-0 container mx-auto overflow-x-hidden w-100vw my-6">
            <GoBackButton />
            {children}
        </div>
    );
}

export default FilterLayout;
