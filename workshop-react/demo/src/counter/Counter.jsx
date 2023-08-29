import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState (0);

  function minus () {
    setCount (pre => pre - 1);
  }

  function plus () {
    setCount (pre => pre + 1);
  }

  return (
    <div>
      <button onClick={minus}>-</button>
      <span>{count}</span>
      <button onClick={plus}>+</button>

    </div>
  );
};

export default Counter;
