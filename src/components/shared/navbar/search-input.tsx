// src/components/shared/navbar/SearchInput.tsx
import React, { memo, useEffect, useState, useCallback } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/atoms/command";
import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { DialogClose } from "@/components/atoms/dialog";
import { useProducts } from "@/features/product/utils/use-products";
import Loader from "@/components/shared/loader";

interface SearchInputProps {
  className?: string;
}

const useKeyboardShortcut = (key: string, callback: () => void) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === key.toLowerCase() &&
        (e.metaKey || e.ctrlKey)
      ) {
        e.preventDefault();
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [key, callback]);
};

const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const { data: productsData, isLoading, isError } = useProducts();
  const products = productsData?.products || [];

  const toggleOpen = useCallback(() => setOpen((prev) => !prev), []);

  useKeyboardShortcut("k", toggleOpen);

  if (isError) {
    // Anda bisa mengganti ini dengan komponen error khusus
    return (
      <div className={cn(className, "text-red-500")}>
        Error loading products.
      </div>
    );
  }

  return (
    <div className={cn(className)}>
      <Input
        className="hidden md:block"
        onClick={() => setOpen(true)}
        placeholder="Type a command or ⌘k to search..."
        type="search"
        aria-label="Search products"
      />
      <Button
        onClick={() => setOpen(true)}
        size="icon"
        className="md:hidden"
        aria-label="Open search"
      >
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
          {isLoading ? (
            <CommandEmpty>
              <Loader />
            </CommandEmpty>
          ) : products.length > 0 ? (
            <CommandGroup
              heading="Related"
              role="group"
              aria-label="Related products"
            >
              {products.map((product) => (
                <CommandItem key={product._id} role="option">
                  <Link
                    to={`/products/${product._id}`}
                    aria-label={product.name}
                  >
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
          ) : (
            <CommandEmpty>No results found.</CommandEmpty>
          )}
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default memo(SearchInput);
