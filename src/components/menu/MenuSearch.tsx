import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface MenuSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const MenuSearch = ({ searchQuery, onSearchChange }: MenuSearchProps) => {
  return (
    <div className="relative max-w-md mx-auto">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search menu items..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-12 pr-12 py-6 text-base bg-card border-border rounded-full shadow-soft focus:shadow-warm transition-shadow"
      />
      {searchQuery && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-full"
          onClick={() => onSearchChange("")}
        >
          <X className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};

export default MenuSearch;
