import { useLocation } from "react-router";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

function getParamFromUrl(url: string, param: string) {
    const parsedUrl = new URL(url);
    const value = parsedUrl.searchParams.get(param);
    return value;
}

type PagePaginationProps = {
    numPages: number;
    currentPage: number;
    links: {
        first: string;
        last: string;
        prev: string;
        next: string;
    };
};

function PagePagination({ numPages, currentPage, links }: PagePaginationProps) {
    const location = useLocation();
    const url = `${location.pathname}${location.search
        .split("&")
        .slice(0, -1)
        .join("&")}`;

    return (
        <Pagination className="mt-6 text-base font-medium">
            <PaginationContent>
                {currentPage > 1 && (
                    <PaginationItem>
                        <PaginationPrevious
                            to={`${url}&page=${getParamFromUrl(
                                links.prev,
                                "page"
                            )}`}
                            className="text-base font-medium"
                        />
                    </PaginationItem>
                )}

                {Array.from({ length: numPages }, (_, i) => (
                    <PaginationItem key={i}>
                        <PaginationLink
                            to={`${url}&page=${i + 1}`}
                            isActive={currentPage === i + 1}
                            className="text-base font-light"
                        >
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                {currentPage < numPages && (
                    <PaginationItem>
                        <PaginationNext
                            to={`${url}&page=${getParamFromUrl(
                                links.next,
                                "page"
                            )}`}
                            className="text-base font-medium"
                        />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
}

export default PagePagination;
