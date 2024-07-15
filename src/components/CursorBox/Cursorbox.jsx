import React, { useState, useEffect } from 'react';
import './CursorboxStyles.module.css';

const CursorBox = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setIsBouncing(true);
      setTimeout(() => {
        setIsBouncing(false);
      }, 500); // Match the duration of the bounce animation
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div
      className={`cursor-box ${isBouncing ? 'bounce' : ''}`}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    />
  );
};

export default CursorBox;
