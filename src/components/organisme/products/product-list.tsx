import { Skeleton } from "@/components/atoms/skeleton";
import { IProduct } from "@/services/interfaces/product-interface";
import React from "react";

const ProductNotFound = React.lazy(
  () => import("@/components/moleculs/product-not-found")
);
const ProductCard = React.lazy(
  () => import("@/components/moleculs/product-card")
);

interface IProps {
  loading: boolean;
  products: IProduct[];
}

const ProductList = ({ loading, products }: IProps) => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {loading ? (
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
  );
};

export default ProductList;
