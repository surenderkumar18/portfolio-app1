// -- 1.    Sequential API Calls

import React, { useEffect, useState } from "react";

const SequentialAPICalls = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch("https://api.example.com/data1");
        const result1 = await response1.json();
        setData1(result1);

        const response2 = await fetch("https://api.example.com/data2");
        const result2 = await response2.json();
        setData2(result2);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Data 1</h1>
      <pre>{JSON.stringify(data1, null, 2)}</pre>
      <h1>Data 2</h1>
      <pre>{JSON.stringify(data2, null, 2)}</pre>
    </div>
  );
};

export default SequentialAPICalls;


// -- 2.    Parallel API Calls

import React, { useEffect, useState } from 'react';

const ParallelAPICalls = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch('https://api.example.com/data1'),
          fetch('https://api.example.com/data2')
        ]);

        const result1 = await response1.json();
        const result2 = await response2.json();

        setData1(result1);
        setData2(result2);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Data 1</h1>
      <pre>{JSON.stringify(data1, null, 2)}</pre>
      <h1>Data 2</h1>
      <pre>{JSON.stringify(data2, null, 2)}</pre>
    </div>
  );
};

export default ParallelAPICalls;

