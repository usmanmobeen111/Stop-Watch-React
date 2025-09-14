/**
 * Formats milliseconds into hh:mm:ss:ms format
 * @param {number} ms - milliseconds
 * @returns {string} formatted time
 */
export const formatMsToTime = (ms) => {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor((ms % 1000) / 10); // to 2 digits

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
};

/**
 * Parses time string (mm:ss or hh:mm:ss) into milliseconds
 * @param {string} timeStr - time string like "1:30" or "01:30:45"
 * @returns {number} milliseconds
 */
export const parseTimeToMs = (timeStr) => {
  const parts = timeStr.split(':').map(Number);
  let ms = 0;
  if (parts.length === 2) {
    // mm:ss
    ms = (parts[0] * 60 + parts[1]) * 1000;
  } else if (parts.length === 3) {
    // hh:mm:ss
    ms = (parts[0] * 3600 + parts[1] * 60 + parts[2]) * 1000;
  }
  return ms;
};
