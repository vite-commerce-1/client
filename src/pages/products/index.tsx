import { useSearchParams } from "react-router-dom";
import { useProducts } from "@/services/api/product/use-products";
import React from "react";

const Container = React.lazy(() => import("@/components/atoms/container"));
const SelectCategory = React.lazy(
  () => import("@/components/organisme/products/select-category")
);
const ProductList = React.lazy(
  () => import("@/components/organisme/products/product-list")
);
const ProductPagination = React.lazy(
  () => import("@/components/organisme/products/product-pagination")
);

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "";
  const name = searchParams.get("name") || "";
  const currentPage = parseInt(searchParams.get("page") || "1", 10); // Default to page 1
  const { data: productsData, isLoading: productsLoading } = useProducts({
    name: name,
    category: selectedCategory,
    page: currentPage,
  });

  const products = productsData?.products;
  const totalPages = productsData?.pagination.totalPages || 1;

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
          <SelectCategory
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
          />
        </header>

        {products && (
          <ProductList loading={productsLoading} products={products} />
        )}

        {totalPages > 1 && (
          <ProductPagination
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </Container>
    </div>
  );
};

export default ProductsPage;
