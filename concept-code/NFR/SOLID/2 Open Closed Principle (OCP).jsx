/**
 * AND &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
 *
 * Open/Closed Principle (OCP) with Higher-Order Components
 *
 * Software entities should be open for extension but closed for modification.
 *
 * Scenario:
 *
 * We have a basic Button component. Now, we want to add logging functionality to it
 * whenever it is clicked. Instead of modifying the existing Button component,
 * we'll create a higher-order component (HOC) to extend its functionality.
 */

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

// HOC to add logging functionality
const withLogging = (WrappedComponent) => {
  return (props) => {
    const handleClick = () => {
      console.log("Button clicked!");
      if (props.onClick) {
        props.onClick();
      }
    };

    return <WrappedComponent {...props} onClick={handleClick} />;
  };
};

const ButtonWithLogging = withLogging(Button);

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <ButtonWithLogging onClick={handleClick}>Click Me</ButtonWithLogging>
    </div>
  );
};

export default App;

/**
 * 2. Open/Closed Principle (OCP)
 * Software entities should be open for extension but closed for modification.
 *
 * Example: Extending a button component with different styles.
 *
 *
 * Before (Violating OCP)
 *
 * */

import React from "react";

const Button = ({ type, onClick }) => {
  const getButtonStyle = () => {
    switch (type) {
      case "primary":
        return { backgroundColor: "blue", color: "white" };
      case "secondary":
        return { backgroundColor: "gray", color: "black" };
      default:
        return {};
    }
  };

  return (
    <button style={getButtonStyle()} onClick={onClick}>
      Button
    </button>
  );
};

/**
 * After (Adhering to OCP)
 */

import React from "react";

const Button = ({ style, onClick, children }) => (
  <button style={style} onClick={onClick}>
    {children}
  </button>
);

const PrimaryButton = (props) => (
  <Button {...props} style={{ backgroundColor: "blue", color: "white" }} />
);

const SecondaryButton = (props) => (
  <Button {...props} style={{ backgroundColor: "gray", color: "black" }} />
);

export { PrimaryButton, SecondaryButton };
