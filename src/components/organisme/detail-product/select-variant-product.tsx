import { memo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";

interface IProps {
  type: {
    key: string;
    values: string[];
    _id: string;
  };
}

const SelectVariantProduct = memo(({ type }: IProps) => {
  return (
    <Select
      key={type._id}
      aria-labelledby={`select-${type._id}`}
      aria-label={type.key || "Select an option"}
    >
      <SelectTrigger className="capitalize">
        <SelectValue placeholder={type.key} />
      </SelectTrigger>
      <SelectContent role="listbox">
        {type?.values.map((value: string | number) => (
          <SelectItem
            className="capitalize"
            value={value as string}
            key={value}
            role="option"
            aria-selected={false}
          >
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
});

export default SelectVariantProduct;
