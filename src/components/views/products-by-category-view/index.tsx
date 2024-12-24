import Container from "@/components/atoms/container";
import { useProducts } from "@/features/product/use-products";
import { useParams, useSearchParams } from "react-router-dom";
import ProductList from "../../organisme/products/product-list";
import ProductPagination from "@/components/organisme/products/product-pagination";
import TextHeaderSection from "@/components/moleculs/text-header-section";

const ProductByCategoryView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const { category } = useParams();

  const { data: productsData } = useProducts({
    category: category!,
  });

  const products = productsData?.products;
  const totalPages = productsData?.pagination.totalPages || 1;

  const handlePageChange = (page: number) => {
    setSearchParams({
      page: page.toString(),
    });
  };
  return (
    <div>
      <Container className="pt-24 space-y-4">
        <header className="flex items-center justify-between">
          <TextHeaderSection title={category!} />
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

export default ProductByCategoryView;