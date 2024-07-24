import { useState, useEffect } from "react";

const useFetchAPI = (url) => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        // manually need to check
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const response = await res.json();
        setApiData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [url]);

  return apiData;
};

export default useFetchAPI;
