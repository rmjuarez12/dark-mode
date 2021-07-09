// Import Dependencies
import { useState } from "react";

export const useLocalStorage = (key, initialVal) => {
  // State that we will use for the stored state
  const [storedVal, setStoredVal] = useState(() => {
    // Item to check if it already exists
    const item = window.localStorage.getItem(key);

    // Check if item exists. If it doesn't, return the already existing one.
    // Otherwise, return the supplied initial value
    return item ? JSON.parse(item) : initialVal;
  });

  // Function that will store a value to the state
  const setVal = (val) => {
    // Set the supplied val into the storedVal state
    setStoredVal(val);

    // Set the item into the localStorage
    window.localStorage.setItem(key, JSON.stringify(val));
  };

  // Return the storedVal
  return [storedVal, setVal];
};
