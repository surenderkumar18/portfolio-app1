import React from "react";

class ClickComponent extends React.Component {
  handleClick = (event) => {
    console.log(event); // This is a synthetic event
  };

  render() {
    return <button onClick={this.handleClick}>Click Me!</button>;
  }
}

export default ClickComponent;

/**
 * How to Use Events Asynchronously?  // using event.persist(); 
 * If you need to access the event object in an asynchronous callback, you should call event.persist(). 
 * This keeps the event object from being nullified.
 */


import React from 'react';

class ClickComponent extends React.Component {
  handleClick = (event) => {
    event.persist(); // Prevent the event from being pooled
    setTimeout(() => {
      console.log(event.type); // Access properties of the event
    }, 1000);
  }

  render() {
    return <button onClick={this.handleClick}>Click Me!</button>;
  }
}

export default ClickComponent;



