// import React from 'react';

// export default function Todo () {
//   return (
//     <div>
//       Todo
//     </div>
//   );
// }

// function Read () {
//   return <button>Read More</button>;
// }

// export {Read};

import React, {useState} from 'react';
const Todo = () => {
  const [todo, setTodo] = useState ([]);

  const [value, setValue] = useState ('');

  function handleChange (event) {
    setValue (event.target.value);
  }

  function handleClick () {
    setTodo ([...todo, value]);
    setValue ('');
  }

  return (
    <div className="container mt-5">
      <div className="todo p-5 shadow d-inline-block">
        <h2>Todo</h2>
        <div className="input-box d-flex align flex-column">
          <input
            className={'form-control'}
            onChange={handleChange}
            value={value}
            type="text"
          />
          <button onClick={handleClick}>+ Add</button>
        </div>
        <ul>
          {todo.map (item => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
