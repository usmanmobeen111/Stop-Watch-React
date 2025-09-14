import React, { useState } from 'react';
import Stopwatch from '../components/Stopwatch';
import Timer from '../components/Timer';
import Footer from '../components/Footer';

const Home = () => {
  const [mode, setMode] = useState('stopwatch');

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl mb-8">Stopwatch & Timer</h1>
      <div className="mb-4">
        <button
          onClick={() => setMode('stopwatch')}
          className={`px-4 py-2 rounded mr-2 ${mode === 'stopwatch' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Stopwatch
        </button>
        <button
          onClick={() => setMode('timer')}
          className={`px-4 py-2 rounded ${mode === 'timer' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Timer
        </button>
      </div>
      {mode === 'stopwatch' ? <Stopwatch /> : <Timer />}
      
    </div>
      <Footer/>
    </>
  );
};

export default Home;
