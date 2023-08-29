import React from 'react';
const Days = () => {
  {
    /* const Days = ({days}) => { ....}  for destructuring Array*/
  }
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
    <ul>
      {days.map (item => {
        return <li>Day: {item}</li>;
      })}
      {/* Another way to wrap and display is:  {days.map (item) => (<li>{item}</li>)}*/}
    </ul>
  );
};

export default Days;
