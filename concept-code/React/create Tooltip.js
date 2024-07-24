import React, { useState } from "react";
import withTooltip from "./withTooltip";
import "./index.css";

const Button = ({ children }) => <button>{children}</button>;

const TooltipButton = withTooltip(Button, "This is a tooltip message");

export default function App() {
  return (
    <div className='App'>
      <h1>Tooltip Example</h1>
      <TooltipButton>Hover me</TooltipButton>
    </div>
  );
}

// --- Tooltip HOC

const withTooltip = (WrappedComponent, tooltipMessage, position = "top") => {
  return (props) => {
    const [visible, setVisible] = useState(false);

    const showTooltip = () => setVisible(true);
    const hideTooltip = () => setVisible(false);
    return (
      <div
        className='tooltip-container'
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        <WrappedComponent {...props} />
        {visible && <Tooltip position={position} message={tooltipMessage} />}
      </div>
    );
  };
};

// --- Tooltip component

const Tooltip = ({ position, message, children }) => (
  <div className='tooltip-wrapper'>
    {children}
    <div className={`tooltip-bubble tooltip-${position}`}>{message}</div>
  </div>
);

export default withTooltip;

/***
.tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.tooltip-bubble {
  position: absolute;
  background-color: #333;
  color: #fff;
  white-space: nowrap;
  padding: 10px;
}

.tooltip-top {
  bottom: 100%;
  left: 50%;
}
 */
