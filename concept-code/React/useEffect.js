/**
 * When the Cleanup Function is Called?
 * 1. When a component that uses useEffect is about to be removed from the DOM, React will call 
 * the cleanup function to allow for any necessary cleanup, such as canceling network requests, 
 * removing event listeners, or stopping timers.
 * 
 * 2. If the dependencies of the useEffect hook change (i.e., the values in the dependency array), 
 * the cleanup function will be called before the next effect is executed. This ensures that any 
 * resources from the previous effect are cleaned up before setting up the new effect.
 */


import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title with the current count
    document.title = `Count: ${count}`;

    // Cleanup function
    return () => {
      console.log("Cleanup");
    };
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;

// ------- debounce custom hook  -------------

import { useState, useEffect } from "react";
const useDebounce = (term, delay) => {
  const [searchTerm, setSearchTerm] = useState(term);
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setSearchTerm(term);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  return searchTerm;
};

export default useDebounce;


// -------- Fetch API custom hooks ----------

import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(url);
        res = await res.json();
        setData(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [url]);
  return data;
};

export default useFetchData;

// -------- useLocalStorage -----------

import { useState } from "react";

const useLocalStorage = ( keyName, defaultValue) => {
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

// 2.---  !important

import React, { useState, useEffect } from 'react';

const DataFetcher = ({ url }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isSubscribed = true;

    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      if (isSubscribed) {
        setData(result);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      console.log('Cleanup: Component unmounted or URL changed');
      isSubscribed = false;
    };
  }, [url]); // Dependency array with `url`

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default DataFetcher;

// Dependency Changes:

// If the url prop changes, the cleanup function is called, setting isSubscribed to false. This prevents setting state on an unmounted component.


