import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import { useCategories } from "@/services/api/category/use-categories";

interface IProps {
  selectedCategory: string;
  handleCategoryChange: (category: string) => void;
}

const SelectCategory = ({ selectedCategory, handleCategoryChange }: IProps) => {
  const { data: categories } = useCategories();
  return (
    <div className="flex items-center justify-end gap-2">
      <span className="text-sm font-semibold">Select by category : </span>
      <Select
        value={selectedCategory}
        onValueChange={(value) => handleCategoryChange(value)}
      >
        <SelectTrigger className="capitalize max-w-[200px] justify-self-end">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          {categories?.map((category) => (
            <SelectItem
              className="capitalize"
              value={category.name}
              key={category._id}
            >
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectCategory;
