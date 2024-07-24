/**
 * mousemove
 * mouseleave
 * mouseenter
 */

import { useState, useEffect } from "react";
// Mouse component using render prop
const Mouse = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return render(position);
};

export default Mouse;
