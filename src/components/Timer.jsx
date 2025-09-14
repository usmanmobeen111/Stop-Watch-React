import React, { useState } from 'react';
import { useTimer } from '../hooks/usTimer';
import { formatMsToTime, parseTimeToMs } from '../utils/timeUtils';
import Controls from './Controls';
import Notification from './Notification';

const Timer = () => {
  const [inputTime, setInputTime] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const { timeLeft, isRunning, start, pause, reset } = useTimer(parseTimeToMs(inputTime), () => {
    setShowNotification(true);
  });

  const handleSetTime = () => {
    reset(parseTimeToMs(inputTime));
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Timer</h2>
      <input
        type="text"
        placeholder="mm:ss or hh:mm:ss"
        value={inputTime}
        onChange={(e) => setInputTime(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSetTime}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 mb-6 w-full"
      >
        Set Time
      </button>
      <div className="text-5xl font-mono text-red-600 mb-6 bg-gray-100 p-4 rounded-lg">
        {formatMsToTime(timeLeft)}
      </div>
      <Controls onStart={start} onPause={pause} onReset={() => reset(parseTimeToMs(inputTime))} isRunning={isRunning} />
      <Notification
        message="Time's up!"
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
      />
    </div>
  );
};

export default Timer;
