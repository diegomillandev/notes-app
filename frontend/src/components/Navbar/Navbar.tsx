import { NotebookPen } from "lucide-react";
import { ProfileInfo } from "../Cards/ProfileInfo";
import { SearchBar } from "../SearchBar/SearchBar";
import { useState } from "react";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {};

  const handleSearch = (value: string) => {
    console.log("Searching for:", value);
  };
  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="bg-white flex flex-wrap md:flex-nowrap items-center justify-between py-2 px-2 md:px-4 shadow-md relative gap-2">
      <div className="flex items-center flex-shrink-0">
        <NotebookPen size={26} />
        <h2 className="text-2xl font-semibold text-black py-2 ">Notes</h2>
      </div>

      <div className="w-full md:w-auto order-3 md:order-none">
        <SearchBar
          value={searchQuery}
          setValue={setSearchQuery}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
      </div>

      <div className="ml-auto md:m-0">
        <ProfileInfo onLogout={handleLogout} />
      </div>
    </div>
  );
};
