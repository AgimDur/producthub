import { Box } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Box className="h-6 w-6 text-primary" />
      <h1 className="text-xl font-bold text-primary font-headline">
        ProduktHub
      </h1>
    </div>
  );
}
