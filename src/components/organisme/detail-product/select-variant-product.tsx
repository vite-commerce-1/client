import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/atoms/select";

interface IProps {
  type: {
    key: string;
    values: string[];
    _id: string;
  };
}

const SelectVariantProduct = ({ type }: IProps) => {
  return (
    <Select key={type._id}>
      <SelectTrigger className="capitalize">{type.key}</SelectTrigger>
      <SelectContent>
        {type?.values.map((value: string | number) => (
          <SelectItem
            className="capitalize"
            value={value as string}
            key={value}
          >
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectVariantProduct;
