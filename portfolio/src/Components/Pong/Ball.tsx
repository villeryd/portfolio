import { useFrameLoop } from "./FrameLoops";
import "./pong.css";
import React, { CSSProperties, useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}
export function Ball() {
  const [position, setPosition] = useState<Position>({ x: 50, y: 50 });
  const [time, setTime] = useState<number>(0);
  const [deltaTime, setDeltaTime] = useState<number>(0);

  const ballSpeed = 100;

  useFrameLoop((time, deltaTime) => {
    const newPosition: Position = {
      x: position.x + ballSpeed * (deltaTime / 1000),
      y: position.y,
    };

    setPosition((prevPosition) => ({
      x: prevPosition.x + ballSpeed * (deltaTime / 1000),
      y: prevPosition.y,
    }));
    setTime(time);
    setDeltaTime(deltaTime);
  });

  const ballStyle: CSSProperties = {
    position: "absolute",
    left: `${position.x}%`,
    top: `${position.y}%`,
  };
  return <div className='ball' style={ballStyle}></div>;
}
