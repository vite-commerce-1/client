import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/atoms/pagination";

interface IProps {
  handlePageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

const ProductPagination = ({
  handlePageChange,
  currentPage,
  totalPages,
}: IProps) => {
  return (
    <Pagination>
      <PaginationContent>
        {/* Previous Page Button */}
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer"
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            isActive={currentPage !== 1}
          />
        </PaginationItem>

        {/* Page Number Links */}
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;
          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(pageNumber)}
                isActive={pageNumber === currentPage}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Ellipsis for overflow */}
        {totalPages > 5 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Next Page Button */}
        <PaginationItem>
          <PaginationNext
            className="cursor-pointer"
            onClick={() =>
              handlePageChange(Math.min(totalPages, currentPage + 1))
            }
            isActive={currentPage !== totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagination;
