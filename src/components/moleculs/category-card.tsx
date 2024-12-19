import { ICategory } from "@/services/interfaces/category-interface";
import { Card } from "../atoms/card";
import { Link } from "react-router-dom";

interface IProps {
  category: ICategory;
}

const CategoryCard = ({ category }: IProps) => {
  return (
    <Link to={"#"}>
      <Card className="p-3 w-full h-full flex flex-col items-center justify-center gap-3  transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none">
        <img src={category.image} alt="category_images" className="w-6 select-none" />
        <p className="capitalize text-sm text-nowrap font-medium select-none">
          {category.name}
        </p>
      </Card>
    </Link>
  );
};

export default CategoryCard;
