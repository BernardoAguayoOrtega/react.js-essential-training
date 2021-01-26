import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

ReactDOM.render(
  <ul>
    {daysOfWeek.map(day => <li>{day}</li>)}
  </ul>,
  document.getElementById('root')
);
