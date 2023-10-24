import { useEffect, useRef } from "react";

export const useFrameLoop = (callback) => {
  const requestId = useRef<number>();
  const previousTime = useRef<number>();

  const loop = (time: number) => {
    if (previousTime.current !== undefined) {
      const deltaTime: number = time - previousTime.current;
      callback(time, deltaTime);
    }
    previousTime.current = time;
    requestId.current = requestAnimationFrame(loop);
  };
  useEffect(() => {
    requestId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(requestId.current);
  }, []);
};
