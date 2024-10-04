import React, { useState, useRef } from 'react';
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setCount(0);
  };


  return (
    <div className='containter mx-96 font-black text-lime-700 bg-lime-100 shadow-xl shadow-slate-300 px-8 py-8'>
      <h1>STOPWATCH</h1>
      <h1 className='text-slate-700 ml-24'>{formatTime(count)}</h1>
      <div className='my-5 flex justify-between'>
      <button onClick={startTimer} className='shadow-lg border-slate-500 hover'>Start</button>
      <button onClick={stopTimer} className='shadow-lg border-slate-500 hover'>Stop</button>
      <button onClick={resetTimer} className='shadow-lg border-slate-500 hover'>Reset</button>
      </div>
    </div>
  );
}

export default App;
