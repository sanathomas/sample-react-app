import React, { useState } from 'react';

const Counter = () => {
    const [Count, setCount] = useState(0);

    const increase = () => {
        setCount (Count + 1);
    };
    const decrease = () => {
        setCount(Count - 1);
    };
    const reset = () => {
        setCount(0);
    };

  return (
    <>
    <h1>{Count}</h1>
    <button onClick={increase}>Count</button>
    <button onClick={decrease}>Decrease</button>
    <button onClick={reset}>Reset</button>
    </>
  );
};

export default Counter;