// useCallback

const memoizedCallback = useCallback(() => {
  // Your function logic
}, [dependencies]);
//Dependencies: The memoized function will be recreated only if one of the dependencies has changed.

<Component callback={memoizedCallback} />;

// -------------------useCallback---------------------------------------

import React, { useState, useCallback } from "react";

const ChildComponent = React.memo(({ onClick }) => {
  console.log("ChildComponent rendered");
  return <button onClick={onClick}>Click me</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // Empty array means the function is created once

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;

// -------------------useMemo---------------------------------------

import React, { useState, useMemo } from 'react';

const ExpensiveComponent = ({ value }) => {
  const computeExpensiveValue = (value) => {
    console.log('Computing expensive value...');
    // Simulate an expensive calculation
    return value * 2;
  };

  const memoizedValue = useMemo(() => computeExpensiveValue(value), [value]);

  return <p>Expensive Value: {memoizedValue}</p>;
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <ExpensiveComponent value={inputValue} />
    </div>
  );
};

export default ParentComponent;

