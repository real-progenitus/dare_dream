import { useEffect, useState } from "react";

const useDragDetector = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [deltaTouchY, setDeltaTouchY] = useState(0);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartY(event.clientY);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const currentY = event.clientY;
      const deltaY = currentY - startY;

      setStartY(currentY);
      setDeltaTouchY(deltaY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (event) => {
    setIsDragging(true);
    setStartY(event.touches[0].clientY);
  };

  const handleTouchMove = (event) => {
    if (isDragging) {
      const currentTouchY = event.touches[0].clientY;
      const deltaTouchY2 = currentTouchY - startY;

      setStartY(currentTouchY);
      setDeltaTouchY(deltaTouchY2);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    // Add mouse and touch event listeners
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    // Cleanup the event listeners on unmount
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, startY]); // Dependencies to reattach handlers if values change

  return [deltaTouchY];
};

export default useDragDetector;
