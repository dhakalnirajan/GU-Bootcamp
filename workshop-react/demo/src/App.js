import './App.css';

import Days from './days/Days';
function App (){
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return (
    <>
      <Days />
      <Days days = {days} />
    </>
  );
}

export default App;

import Display from './display/Display';

function App () {
  return (
    <>
      <Display name = {"Michael"} age={2000000}/>
      <Display name = {"Samael"} age={21000000}/>
    </>
  );
}

export default App;

import './App.css';
import Card from './card/card';
import Clock from './clock/Clock';
import Todo from './todo/Todo';
import {Read} from "./todo/Todo"

function App () {
  const cards = ['Pokhara', 'Kathmandu', 'Butwal'];

  return (
    <div className="App">
      <>
        <Clock />
        <Todo />
        <Read />
      </>
      {cards.map (item => {
        return <Card item={item} />;
      })}
    </div>
  );
}

export default App;

import Counter from "./counter/Counter";
import Hook from "./hook/Hook"

function App(){
  return (
    <>
      <Counter />
    </>
  );
}

export default App;

import React from 'react';
import Todo from './todo/Todo';

function App(){
  return (
    <>
      <Todo />
    </>
  )
}

export default App;
