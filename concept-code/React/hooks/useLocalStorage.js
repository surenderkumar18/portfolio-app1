import { useState } from "react";

const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Retrieve the value from localStorage
      const item = window.localStorage.getItem(keyName);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      // Return the default value if an error occurs
      console.error(`Error retrieving value for key ${keyName}:`, error);
      return defaultValue;
    }
  });

  // Define the setValue function
  const setValue = (newValue) => {
    try {
      // Allow newValue to be a function to update based on previous value
      const valueToStore =
        newValue instanceof Function ? newValue(storedValue) : newValue;
      window.localStorage.setItem(keyName, JSON.stringify(valueToStore));

      setStoredValue(valueToStore);
    } catch (error) {
      // Log an error if setValue fails
      console.error(`Error setting value for key ${keyName}:`, error);
    }
  };

  // Return the stored value and setValue function
  return [storedValue, setValue];
};

export default useLocalStorage;
