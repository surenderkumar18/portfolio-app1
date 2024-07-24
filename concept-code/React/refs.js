import React, { useState, useRef, useEffect } from "react";

function MyComponent() {
  // Create a ref using useRef
  const inputRef = useRef(null);

  // Function to focus on the input element
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Attach the ref to the input element */}
      <input ref={inputRef} type='text' />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// 2. -------------

/**
 * Important thing to know about below code is that, when below component first render
 * on the page, will print
 * Current Count: 0,
 * Previous Count: @blank
 * understand this.
 */

function MyComponent() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  // Update prevCountRef with the current count value after each render
  useEffect(() => {
    prevCountRef.current = count;
  });

  // Function to handle incrementing count
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default MyComponent;
