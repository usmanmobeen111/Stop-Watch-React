import React from 'react';
import { useStopwatch } from '../hooks/useStopwatch';
import { formatMsToTime } from '../utils/timeUtils';
import Controls from './Controls';
import LapList from './LapList';

const Stopwatch = () => {
  const { elapsedTime, isRunning, laps, start, pause, reset, lap } = useStopwatch();

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Stopwatch</h2>
      <div className="text-5xl font-mono text-blue-600 mb-6 bg-gray-100 p-4 rounded-lg">
        {formatMsToTime(elapsedTime)}
      </div>
      <Controls onStart={start} onPause={pause} onReset={reset} isRunning={isRunning} />
      <button
        onClick={lap}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed mx-auto block"
        disabled={!isRunning}
      >
        Lap
      </button>
      <LapList laps={laps} />
    </div>
  );
};

export default Stopwatch;
