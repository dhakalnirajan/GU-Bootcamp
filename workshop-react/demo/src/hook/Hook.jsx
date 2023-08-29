import React, {useState} from 'react';

const Hook = () => {
  const [state, setState] = useState (0);

  console.log ('Rendered');

  function click () {
    setState (pre => pre + 1);
  }

  return (
    <div>
      <button onClick={click}>Click</button>
      {state}
    </div>
  );
};

export default Hook;
