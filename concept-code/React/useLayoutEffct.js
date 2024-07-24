// Runs synchronously after the render but before the paint.
// Useful for reading layout from the DOM and synchronously re-rendering.

import React, { useState } from "react";
const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className='App'>
      <h1>React Modal Example</h1>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal isOpen={modalOpen} onClose={toggleModal} />
    </div>
  );
};
import React, { useState, useEffect, useLayoutEffect } from "react";
import "./Modal.scss";

const Modal = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  // useEffect to update visibility based on isOpen prop
  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]); // Runs whenever 'isOpen' prop changes

  // useLayoutEffect to hide modal when window is resized to certain width
  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && isVisible) {
        setIsVisible(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isVisible]); // Runs whenever 'isVisible' state changes

  // Event listener to close modal when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isVisible && !event.target.closest(".modal-content")) {
        setIsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]); // Runs whenever 'isVisible' state changes

  return (
    <div className={`modal ${isVisible ? "show" : "hide"}`}>
      <div className='modal-content'>
        <span className='close' onClick={onClose}>
          &times;
        </span>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </div>
    </div>
  );
};

export default Modal;
