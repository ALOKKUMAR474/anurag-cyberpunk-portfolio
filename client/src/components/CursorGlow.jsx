import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        transform: `translate3d(${position.x - 140}px, ${position.y - 140}px, 0)`
      }}
      aria-hidden="true"
    />
  );
}
