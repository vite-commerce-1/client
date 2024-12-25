import { Card } from "@/components/atoms/card";
import { ICategory } from "@/services/interfaces/category-interface";
import { Link } from "react-router-dom";

interface IProps {
  category: ICategory;
}

const CategoryCard = ({ category }: IProps) => {
  const { image, name } = category;
  return (
    <Link to={`products/category/${name}`}>
      {" "}
      {/* Mengubah tautan menjadi dinamis */}
      <Card className="p-3 w-full h-full flex flex-col items-center justify-center gap-3 dark:bg-primary">
        <img
          src={image || "path/to/fallback-image.png"} // Menangani gambar yang tidak tersedia
          alt={name} // Menggunakan nama kategori sebagai alt text
          className="w-6 select-none"
        />
        <p className="capitalize dark:text-background text-sm text-nowrap font-medium select-none">
          {name}
        </p>
      </Card>
    </Link>
  );
};

export default CategoryCard;
