import React from 'react';
import { formatMsToTime } from '../utils/timeUtils';

const LapList = ({ laps }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="mt-4 max-h-48 overflow-y-auto">
      <ul>
        {laps.map((lap, index) => (
          <li key={index} className="flex justify-between items-center border-b py-1">
            <span>Lap {index + 1}: {formatMsToTime(lap)}</span>
            <button
              onClick={() => copyToClipboard(formatMsToTime(lap))}
              className="text-blue-500 hover:underline"
            >
              Copy
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LapList;
