import { Search, Trash2 } from "lucide-react";
import type { SetStateAction } from "react";

interface SearchBarProps {
  value?: string;
  setValue?: (value: SetStateAction<string>) => void;
  handleSearch?: (value: string) => void;
  onClearSearch?: () => void;
}

export const SearchBar = ({
  value,
  setValue,
  handleSearch,
  onClearSearch,
}: SearchBarProps) => {
  return (
    <div className="flex items-center md:w-96">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full h-full">
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search notes..."
          value={value}
          onChange={(e) => setValue && setValue(e.target.value)}
        />

        {value && (
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-400 hover:text-red-500 focus:outline-none cursor-pointer"
            onClick={onClearSearch}
          >
            <Trash2 size={20} />
          </button>
        )}
      </div>
      <button
        type="submit"
        className="p-2.5 ms-1 text-sm font-medium text-white bg-blue-700 rounded border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
        onClick={handleSearch ? () => handleSearch(value || "") : undefined}
      >
        <Search size={18} />
        <span className="sr-only">Search</span>
      </button>
    </div>
  );
};
