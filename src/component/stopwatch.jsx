import React, { useState, useRef } from "react";
import "./stopwatchcss.css";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const pauseStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <div className="time">{formatTime(time)}</div>
      <div className="buttons">
        {!isRunning ? (
          <button onClick={startStopwatch} className="btn start">Start</button>
        ) : (
          <button onClick={pauseStopwatch} className="btn pause">Pause</button>
        )}
        <button onClick={resetStopwatch} className="btn reset">Reset</button>
      </div>
    </div>
  );
}
