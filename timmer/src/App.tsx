import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(10);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12 font-sans">
      <div className="text-8xl font-bold text-slate-800 mb-8 tabular-nums">
        {seconds}
      </div>

      <div className="flex gap-4">
        {!isActive ? (
          <button
            disabled={seconds === 0}
            onClick={() => setIsActive(true)}
            className="px-8 py-3 bg-green-500  disabled:bg-gray-300 text-white font-semibold rounded-lg transition-colors shadow-md"
          >
            Start
          </button>
        ) : (
          <button
            onClick={() => setIsActive(false)}
            className="px-8 py-3 bg-red-500  text-white font-semibold rounded-lg transition-colors "
          >
            Stop
          </button>
        )}

        <button
          onClick={resetTimer}
          className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg transition-colors "
        >
          Reset
        </button>
      </div>
      
      {seconds === 0 && (
        <p className="mt-4 text-red-600 font-medium "></p>
      )}
    </div>
  );
};

export default Timer;