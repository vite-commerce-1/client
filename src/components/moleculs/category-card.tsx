import { ICategory } from "@/services/interfaces/category-interface";
import { Card, CardContent, CardHeader } from "../atoms/card";
import { Link } from "react-router-dom";

interface IProps {
  category: ICategory;
}

const CategoryCard = ({ category }: IProps) => {
  return (
    <Link to={"#"} className="flex h-full w-full">
      <Card className="w-full h-full transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none">
        <CardHeader className="min-w-20 flex items-center justify-center">
          <img src={category.image} alt="category_images" className="w-6" />
        </CardHeader>
        <CardContent className="text-center capitalize font-medium text-xs">
          <p>{category.name}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
