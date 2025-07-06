"use client";

import { Search as SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { Input } from "@/components/ui/input";

export function Search({ placeholder }: { placeholder: string }) {
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams();
    if (term) {
      params.set("query", term);
    }
    replace(`/?${params.toString()}`);
  }, 300);

  return (
    <div className="relative">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        className="w-full rounded-md bg-background pl-8 md:w-[200px] lg:w-[330px]"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
