import React from 'react';
import './App.css';

import Days from './days/Days';
import Display from './display/Display';
import Card from './card/card';
import Clock from './clock/Clock';
import Todo, { Read } from './todo/Todo';
import Counter from './counter/Counter';
import Hook from './hook/Hook';

function App() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const displayData = [
    { name: 'Michael', age: 2000000 },
    { name: 'Samael', age: 21000000 },
  ];

  const cards = ['Pokhara', 'Kathmandu', 'Butwal'];

  return (
    <div className="App">
      <>
        <Days />
        <Days days={days} />
      </>

      <>
        {displayData.map((data, index) => (
          <Display key={index} name={data.name} age={data.age} />
        ))}
      </>

      <>
        <Clock />
        <Todo />
        <Read />
      </>

      {cards.map((item, index) => (
        <Card key={index} item={item} />
      ))}

      <>
        <Counter />
      </>
      
      <>
        <Todo />
      </>
    </div>
  );
}

export default App;
