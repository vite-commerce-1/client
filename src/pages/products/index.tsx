import { useSearchParams } from "react-router-dom";
import { useCategories } from "@/services/api/category/use-categories";
import { useProducts } from "@/services/api/product/use-products";
import { IProduct } from "@/services/interfaces/product-interface";

import Container from "@/components/atoms/container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import ProductCard from "@/components/moleculs/product-card";
import { Skeleton } from "@/components/atoms/skeleton";
import ProductNotFound from "@/components/moleculs/product-not-found";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/atoms/pagination";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "";
  const name = searchParams.get("name") || "";
  const currentPage = parseInt(searchParams.get("page") || "1", 10); // Default to page 1
  const { data: categories } = useCategories();
  const { data: productsData, isLoading: productsLoading } = useProducts({
    name: name,
    category: selectedCategory,
    page: currentPage, // Pass current page to the API request
  });

  const products = productsData?.products;
  const totalPages = productsData?.pagination.totalPages || 1; // Get the total pages from pagination data

  const handleCategoryChange = (category: string) => {
    if (category === "others") {
      category = "";
    }
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const handlePageChange = (page: number) => {
    setSearchParams({
      page: page.toString(),
      category: selectedCategory,
      name: name,
    });
  };

  return (
    <div className="pt-20 pb-10">
      <Container className="space-y-4">
        <header className="grid grid-cols-2">
          <h1 className="section-title">Products</h1>
          <div className="flex items-center justify-end gap-2">
            <span className="text-sm font-semibold">Select by category : </span>
            <Select
              value={selectedCategory}
              onValueChange={(value) => handleCategoryChange(value)}
            >
              <SelectTrigger className="capitalize max-w-[200px] justify-self-end">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories?.map((category) => (
                  <SelectItem
                    className="capitalize"
                    value={category.name}
                    key={category._id}
                  >
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </header>
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productsLoading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <Skeleton key={index} className="h-96" />
            ))
          ) : !products ? (
            <ProductNotFound className="col-span-4" />
          ) : (
            products?.map((product: IProduct) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </main>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              {/* Previous Page Button */}
              <PaginationItem>
                <PaginationPrevious
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
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                  isActive={currentPage !== totalPages} 
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </Container>
    </div>
  );
};

export default ProductsPage;
