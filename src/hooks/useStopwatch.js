import { useState, useRef, useCallback } from 'react';

export const useStopwatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  const start = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setElapsedTime(prev => prev + 10); // update every 10ms
      }, 10);
    }
  }, [isRunning]);

  const pause = useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  }, [isRunning]);

  const reset = useCallback(() => {
    setIsRunning(false);
    setElapsedTime(0);
    setLaps([]);
    clearInterval(intervalRef.current);
  }, []);

  const lap = useCallback(() => {
    setLaps(prev => [...prev, elapsedTime]);
  }, [elapsedTime]);

  return {
    elapsedTime,
    isRunning,
    laps,
    start,
    pause,
    reset,
    lap
  };
};
