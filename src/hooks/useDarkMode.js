// Import Hooks
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  // Use the useLocalStorage hook and get the return values
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  // Toggle the state of darkMode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return [darkMode, toggleDarkMode];
};
