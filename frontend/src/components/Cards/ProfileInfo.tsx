import { getInitials } from "@/utils/helper";

interface ProfileInfoProps {
  onLogout: () => void;
}

export const ProfileInfo = ({ onLogout }: ProfileInfoProps) => {
  return (
    <div className="relative inline-flex items-center group rounded-full p-1 cursor-pointer">
      <div className="overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="w-10 h-10 inline-flex items-center justify-center font-medium text-gray-600 dark:text-gray-300 rounded-full">
          {getInitials("Diego Millan")}
        </span>
      </div>
      <div className="absolute hidden group-hover:block right-1 top-12/12 z-10 bg-white divide-y divide-gray-100 rounded border border-gray-200 w-48 dark:bg-gray-700 dark:divide-gray-600">
        <div className="px-4 py-2 text-sm text-gray-800 dark:text-white">
          <div className="truncate">Diego Millan</div>
          <div className="truncate text-gray-400">diegomillandev@gmail.com</div>
        </div>
        <div className="py-1">
          <button
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full text-left cursor-pointer"
            onClick={onLogout}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};
