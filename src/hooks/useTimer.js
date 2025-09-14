import { useState, useRef, useCallback, useEffect } from 'react';

export const useTimer = (initialTime = 0, onComplete) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = useCallback(() => {
    if (!isRunning && timeLeft > 0) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 10) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            if (onComplete) onComplete();
            return 0;
          }
          return prev - 10;
        });
      }, 10);
    }
  }, [isRunning, timeLeft, onComplete]);

  const pause = useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  }, [isRunning]);

  const reset = useCallback((newTime = initialTime) => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTimeLeft(newTime);
  }, [initialTime]);

  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  return {
    timeLeft,
    isRunning,
    start,
    pause,
    reset,
  };
};
