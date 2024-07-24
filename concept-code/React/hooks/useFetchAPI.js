import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(url);
        // manually need to check
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        res = await res.json(); // convert streamed data into JSON
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
