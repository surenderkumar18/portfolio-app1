// MyComponent.js
import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data Loaded</h1>
      <p>{data.message}</p>
    </div>
  );
};

export default MyComponent;

// MyComponent.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";

// Mock the fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: "Hello World" }),
  })
);

test("displays data after fetching", async () => {
  render(<MyComponent />);

  // Use findBy to wait for the element to appear in the DOM
  const dataElement = await screen.findByText("Hello World");

  // Assertions
  expect(dataElement).toBeInTheDocument();
});
