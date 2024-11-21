import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export function ArticlesPagination({
    totalItems,
    itemsPerPage,
    currentPage,
    setCurrentPage
}: {
    totalItems: number,
    itemsPerPage: number,
    currentPage: number,
    setCurrentPage: (page: number) => void
}) {
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pages.push(i);
    }

    const handleNextPage = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <Pagination className="m-4">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => handlePreviousPage()}
                    >
                        Anterior
                    </PaginationPrevious>
                </PaginationItem>
                {pages.map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink
                            onClick={() => setCurrentPage(page)}
                            className={page === currentPage ? "bg-blue-500 hover:bg-blue-400 text-white" : ""}
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext
                        onClick={() => handleNextPage()}
                    >
                        Próximo
                    </PaginationNext>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )

}
