import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/atoms/command";
import { memo, useEffect, useState } from "react";
import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useProducts } from "@/features/product/use-products";
import { DialogClose } from "@/components/atoms/dialog";

const useKeyboardShortcut = (key: string, callback: () => void) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === key && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [key, callback]);
};

const SearchInput = memo(({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);

  const { data: productsData } = useProducts();

  const products = productsData?.products;

  useKeyboardShortcut("k", () => setOpen((prev) => !prev));

  return (
    <div className={cn(className, "")}>
      <Input
        className="hidden md:block"
        onClick={() => setOpen(true)}
        placeholder="Type a command or ⌘k to search..."
        type="search"
      />
      <Button onClick={() => setOpen(true)} size={"icon"} className="md:hidden">
        <SearchIcon />
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        aria-label="Search dialog"
      >
        <CommandInput
          name="name"
          placeholder="Type a command or search..."
          aria-label="Search input"
        />
        <CommandList role="listbox">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup
            heading="Related"
            role="group"
            aria-label="Related products"
          >
            {products?.map((product) => (
              <CommandItem key={product._id} role="option">
                <Link to={`/products/${product._id}`} aria-label={product.name}>
                  <DialogClose className="flex items-center justify-start gap-3">
                    <img
                      src={product.image[0] || "/path/to/default-image.jpg"}
                      alt={product.name || "Product image"}
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
});

export default SearchInput;
