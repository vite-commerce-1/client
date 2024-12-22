import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../atoms/command";
import { useEffect, useState } from "react";
import { Input } from "../atoms/input";
import { Button } from "../atoms/button";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useProducts } from "@/services/api/product/use-products";
import { DialogClose } from "../atoms/dialog";

const SearchInput = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);

  const { data: productsData } = useProducts();

  const products = productsData?.products;

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className={cn(className, "")}>
      <Input
        className="hidden md:block"
        onClick={() => setOpen(true)}
        placeholder="Type a command or ⌘k to search..."
        type="search"
      />
      <Button
        onClick={() => setOpen(true)}
        size={"icon"}
        className="md:hidden"
      >
        <SearchIcon />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput name="name" placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Related">
            {products?.map((product) => (
              <CommandItem>
                <Link to={`/products/${product._id}`}>
                  <DialogClose className="flex items-center justify-start gap-3">
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="w-10 rounded-md"
                    />
                    {product.name}
                  </DialogClose>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default SearchInput;
