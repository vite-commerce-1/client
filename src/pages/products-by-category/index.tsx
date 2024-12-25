import ProductByCategoryView from "@/components/views/products-by-category-view";
import { Helmet } from "react-helmet-async";

const ProductByCategoryPage = () => {
  return (
    <>
      <Helmet>
        <title>Products By Category | E-Commerce</title>
        <meta name="description" content="Browse our product selection" />
      </Helmet>
      <ProductByCategoryView />;
    </>
  );
};

export default ProductByCategoryPage;
