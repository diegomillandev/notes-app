import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface InputPasswordProps {
  value?: string;
  setValue?: (value: React.SetStateAction<string>) => void;
}

export const InputPassword = ({ value, setValue }: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative">
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
      >
        Password
      </label>
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        id="password"
        placeholder="••••••••"
        className="bg-gray-50 border border-gray-300 placeholder-gray-300 text-gray-900 rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={value}
        onChange={(e) => setValue && setValue(e.target.value)}
      />

      {showPassword ? (
        <Eye
          className="absolute right-3 top-10 cursor-pointer text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
          onClick={togglePasswordVisibility}
          size={20}
        />
      ) : (
        <EyeOff
          className="absolute right-3 top-10 cursor-pointer text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
          onClick={togglePasswordVisibility}
          size={20}
        />
      )}
    </div>
  );
};
