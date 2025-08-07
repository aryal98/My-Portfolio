import React, { useEffect, useState } from "react";

export const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const formatTime = (totalseconds) => {
    const hrs = Math.floor(totalseconds / 3600);
    const min = Math.floor((totalseconds % 3600) / 60);
    const sec = totalseconds % 60;

    const pad = (num) => String(num).padStart(2, "0");

    return `${pad(hrs)}:${pad(min)}:${pad(sec)}`;
  };

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <div className="text-5xl flex justify-center mt-4">
        <h1 className="bg-[#003399] text-white flex rounded-full px-10  ">
          StopWatch
        </h1>
      </div>
      <div className="text-6xl  flex justify-center mt-4">
        {formatTime(time)}
      </div>
      <div className="flex justify-center gap-2 text-5xl mt-4 ">
        <button
          onClick={handleStart}
          className="bg-[#003399] text-white rounded-full px-8"
        >
          Start
        </button>
        <button
          onClick={handleReset}
          className="bg-green-700 text-white rounded-full px-8"
        >
          Reset
        </button>
        <button
          onClick={handleStop}
          className="bg-red-500 text-white rounded-full px-8"
        >
          Stop
        </button>
      </div>
    </div>
  );
};
