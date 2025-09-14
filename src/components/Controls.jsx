import React from 'react';

const Controls = ({ onStart, onPause, onReset, isRunning }) => {
  return (
    <div className="flex gap-4 justify-center">
      {!isRunning ? (
        <button
          onClick={onStart}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300"
        >
          Start
        </button>
      ) : (
        <button
          onClick={onPause}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300"
        >
          Pause
        </button>
      )}
      <button
        onClick={onReset}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300"
      >
        Reset
      </button>
    </div>
  );
};

export default Controls;
