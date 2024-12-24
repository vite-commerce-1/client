import { IProductType } from "@/services/interfaces/product-interface";
import SelectVariantProduct from "../../organisme/detail-product/select-variant-product";
import { cn } from "@/lib/utils";

interface IProps {
  type: IProductType[];
  className?: string;
}

const ProductOptionVariant = ({ type = [], className }: IProps) => {
  return (
    <div className={cn("grid grid-cols-2 grid-flow-row", className)}>
      {type.map((type) => {
        return <SelectVariantProduct key={type._id} type={type} />;
      })}
    </div>
  );
};

export default ProductOptionVariant;
