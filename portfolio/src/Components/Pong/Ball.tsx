import { useFrameLoop } from "./FrameLoops";
import "./pong.css";
import React, { CSSProperties, useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export function Ball({ delta }) {
  const [position, setPosition] = useState<Position>({ x: 50, y: 50 });
  const [time, setTime] = useState<number>(0);
  const [deltaTime, setDeltaTime] = useState<number>(0);
  const windowHeight = window.innerHeight / 9;
  const windowWidth = window.innerWidth / 9;
  const [direction, setDirection] = useState<Position>({ x: 0, y: 0 });
  const ballSpeed = 0.025;
  useEffect(() => {
    const heading = randomNumberBetween(0, 2 * Math.PI);
    setDirection({ x: Math.cos(heading), y: Math.sin(heading) });
  }, []);

  useEffect(() => {
    setPosition((prevPosition) => {
      let newDirection: Position;
      if (prevPosition.x >= windowHeight || prevPosition.x <= 0) {
        setDirection({ x: direction.x * -1, y: direction.y });
        direction.x *= -1;
      }
      if (prevPosition.y >= windowWidth || prevPosition.y <= 0) {
        setDirection({ x: direction.x, y: direction.y * -1 });
        direction.y *= -1;
      }
      prevPosition.x += direction.x * ballSpeed * delta;
      prevPosition.y += direction.y * ballSpeed * delta;
      return { x: prevPosition.x, y: prevPosition.y };
    });
  }, [delta, direction]);
  //   useFrameLoop((time, deltaTime) => {
  //     const newPosition: Position = {
  //       x: position.x + ballSpeed * (deltaTime / 1000),
  //       y: position.y,
  //     };

  //     setPosition((prevPosition) => {
  //       console.log(prevPosition);
  //       if (prevPosition.x <= 0 || prevPosition.x >= windowWidth) {
  //         console.log(true);
  //         return {
  //           x: prevPosition.x + ballSpeed * deltaTime - 1,
  //           y: prevPosition.y + ballSpeed * deltaTime,
  //         };
  //       }
  //       if (prevPosition.y <= 0 || prevPosition.y >= windowHeight) {
  //         return {
  //           x: prevPosition.x + ballSpeed * deltaTime,
  //           y: prevPosition.y + ballSpeed * deltaTime - 1,
  //         };
  //       }
  //       return {
  //         x: prevPosition.x + ballSpeed * deltaTime,
  //         y: prevPosition.y + ballSpeed * deltaTime,
  //       };
  //     });
  //     setTime(time);
  //     setDeltaTime(deltaTime);
  //   });

  const ballStyle: CSSProperties = {
    position: "absolute",
    left: `${position.x}%`,
    top: `${position.y}%`,
  };

  return <div className='ball' style={ballStyle}></div>;
}

function randomNumberBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
