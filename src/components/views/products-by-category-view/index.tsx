import Container from "@/components/atoms/container";
import { useParams, useSearchParams } from "react-router-dom";
import ProductList from "../../organisme/products/list-product";
import ProductPagination from "@/features/product/components/pagination-product";
import TextHeaderSection from "@/components/shared/text-header-section";
import { useProducts } from "@/features/product/utils/use-products";

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
