import Container from "@/components/atoms/container";
import ProductList from "@/components/organisme/products/list-product";
import ProductPagination from "@/features/product/components/pagination-product";
import { useSearchParams } from "react-router-dom";
import TextHeaderSection from "@/components/shared/text-header-section";
import { Helmet } from "react-helmet-async";

import React, { Suspense } from "react";
import { Skeleton } from "@/components/atoms/skeleton";
import { useProducts } from "@/features/product/utils/use-products";
const SelectCategory = React.lazy(
  () => import("@/features/product/components/select-category-products")
);

const ProductsView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "";
  const name = searchParams.get("name") || "";
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const { data: productsData } = useProducts({
    name: name,
    category: selectedCategory,
    page: currentPage,
  });
  const products = productsData?.products;
  const totalPages = productsData?.pagination.totalPages || 1;

  const handleCategoryChange = (category: string) => {
    setSearchParams((prev) => {
      const newParams = {
        ...prev,
        category: category === "others" ? "" : category,
      };
      return newParams;
    });
  };

  const handlePageChange = (page: number) => {
    setSearchParams({
      page: page.toString(),
      category: selectedCategory,
      name: name,
    });
  };
  return (
    <>
      <Helmet>
        <title>Products - Your E-commerce Site</title>
        <meta
          name="description"
          content="Browse our wide selection of products."
        />
        <meta name="keywords" content="ecommerce, products, shop" />
      </Helmet>
      <Container className="pt-24 space-y-4">
        <header className="flex items-center justify-between">
          <TextHeaderSection title="Products" />
          <Suspense fallback={<Skeleton className="h-8" />}>
            <SelectCategory
              selectedCategory={selectedCategory}
              handleCategoryChange={handleCategoryChange}
            />
          </Suspense>
          ;
        </header>

        <ProductList products={products || Array(8).fill(null)} />

        <ProductPagination
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Container>
    </>
  );
};

export default ProductsView;
