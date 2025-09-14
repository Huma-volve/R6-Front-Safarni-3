import type { ReactNode } from "react";

type SectionContainerProps = {
    sectionTitle: string;
    children: ReactNode;
};

function SectionContainer({ sectionTitle, children }: SectionContainerProps) {
    return (
        <section className="py-6 w-full overflow-x-auto">
            <header className="mb-4 flex items-center justify-between">
                <h2 className="font-medium text-base sm:text-xl">
                    {sectionTitle}
                </h2>
                <button className="text-blue-700 text-sm cursor-pointer hover:text-blue-900 transition-all">
                    View more
                </button>
            </header>
            {children}
        </section>
    );
}

export default SectionContainer;
