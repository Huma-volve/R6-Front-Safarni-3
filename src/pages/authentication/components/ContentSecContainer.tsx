import type { ReactNode } from "react";

type ContentSecContainerProps = {
    children: ReactNode;
};

function ContentSecContainer({ children }: ContentSecContainerProps) {
    return (
        <section className="flex flex-col items-center gap-4 mx-auto w-full max-w-md">
            {children}
        </section>
    );
}

export default ContentSecContainer;
