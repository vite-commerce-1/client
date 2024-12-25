import ProductsView from "@/components/views/products-view";
import { Helmet } from "react-helmet-async";

const ProductsPage = () => {
  return (
    <>
      <Helmet>
        <title>Products</title>
        <meta name="description" content="Browse our product selection" />
      </Helmet>
      <ProductsView />
    </>
  );
};

export default ProductsPage;
