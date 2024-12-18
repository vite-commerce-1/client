import { IProduct } from "@/services/interfaces/product-interface";

interface IProps {
  product: IProduct;
}

const ListDetailProduct = ({ product }: IProps) => {
  return (
    <ul>
      <li className="grid grid-cols-2 line-clamp-1">
        <span className="text-zinc-700">Name</span>
        <span className="text-nowrap">{product?.name}</span>
      </li>
    </ul>
  );
};

export default ListDetailProduct;
