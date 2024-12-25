import { IProduct } from "@/services/interfaces/product-interface";
import ProductCard from "./card-product";

interface IProps {
  products: IProduct[];
}

const ListProduct = ({ products }: IProps) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {products?.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ListProduct;
