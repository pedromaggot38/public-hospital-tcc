import { useEffect } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ArticlesPagination({
    totalItems,
    itemsPerPage,
    currentPage,
    setCurrentPage,
}: {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const maxPageNum = 3;
    const pageNumLimit = Math.floor(maxPageNum / 2);

    const activePages = pageNumbers.slice(
        Math.max(0, currentPage - 1 - pageNumLimit),
        Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length)
    );

    const handleNextPage = () => {
        if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const renderPages = () => {
        const renderedPages = activePages.map((page, idx) => (
            <PaginationItem
                key={idx}
                className={currentPage === page ? "bg-neutral-100 rounded-md" : ""}
            >
                <PaginationLink onClick={() => setCurrentPage(page)}>
                    {page}
                </PaginationLink>
            </PaginationItem>
        ));

        if (activePages[0] > 1) {
            renderedPages.unshift(
                <PaginationEllipsis
                    key="ellipsis-start"
                    onClick={() => setCurrentPage(activePages[0] - 1)}
                />
            );
        }
        if (activePages[activePages.length - 1] < pageNumbers.length) {
            renderedPages.push(
                <PaginationEllipsis
                    key="ellipsis-end"
                    onClick={() =>
                        setCurrentPage(activePages[activePages.length - 1] + 1)
                    }
                />
            );
        }
        return renderedPages;
    };
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]);

    return (
        <Pagination className="m-4">
            <PaginationContent>
                <PaginationItem>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handlePreviousPage()}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft />
                    </Button>
                </PaginationItem>

                {renderPages()}

                <PaginationItem>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleNextPage()}
                        disabled={currentPage === pageNumbers.length}
                    >
                        <ChevronRight />
                    </Button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
