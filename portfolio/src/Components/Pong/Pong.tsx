import "./pong.css";
import { useState } from "react";
import { Ball } from "./Ball";
import { useFrameLoop } from "./FrameLoops";

export function Pong() {
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [deltaTime, setDeltaTime] = useState<number>(0);

  useFrameLoop((time, deltaTime) => {
    setTime(time);
    setDeltaTime(deltaTime);
  });

  return (
    <div className='background'>
      <div className='score'>
        <div id='player-score'>{playerScore}</div>
        <div id='computer-score'>{computerScore}</div>
      </div>

      <Ball />
      <div className='paddle left'></div>
      <div className='paddle right'></div>
    </div>
  );
}
