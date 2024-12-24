import Container from "@/components/atoms/container";
import ProductList from "@/components/views/products-view/product-list";
import ProductPagination from "@/components/organisme/products/product-pagination";
import SelectCategory from "@/components/views/products-view/products-select-category";
import { useProducts } from "@/features/product/use-products";
import { useSearchParams } from "react-router-dom";

const ProductsView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "";
  const name = searchParams.get("name") || "";
  const currentPage = parseInt(searchParams.get("page") || "1", 10); // Default to page 1

  const { data: productsData } = useProducts({
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
    <div>
      <Container>
        <header className="flex items-center justify-between">
          <h1 className="section-title">Products</h1>

          <SelectCategory
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
          />
        </header>

        <ProductList products={products!} />

        <ProductPagination
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Container>
    </div>
  );
};

export default ProductsView;
