import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const List = () => {

  const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

  return daysOfWeek.map(day => React.createElement('li',null,day))

}

ReactDOM.render(
React.createElement('div', {style: {color: "coral"}}, List()),
  document.getElementById('root')
);
