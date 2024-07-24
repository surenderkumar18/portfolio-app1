import { useState, useEffect } from "react";

const useDebounce = (term, delay) => {
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(term);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  return debouncedTerm;
};

export default useDebounce;
