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

const SearchInput = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);

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
        variant={"reverse"}
        size={"icon"}
        className="md:hidden"
      >
        <SearchIcon />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default SearchInput;
