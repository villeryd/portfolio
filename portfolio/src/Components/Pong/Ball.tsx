import "./pong.css";
import { useEffect, useState } from "react";

export function Ball() {
  const [frameTime, setFrameTime] = useState();
  useEffect(() => {
    let frameId;
    const frame = (time) => setFrameTime(time);
    frameId = requestAnimationFrame(frame);
  }, []);
  return <div className='ball'></div>;
}
