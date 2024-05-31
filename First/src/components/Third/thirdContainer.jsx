// ThirdContainer.jsx
import React from 'react';
import './thirdContainer.css';

const ThirdContainer = ({ day, date, time, temperature, weather, icon }) => {
  return (
    <div className="third">
      <h1>{day}</h1>
      <p className='third-para'>{date}, {time}</p>
      {icon}
      <br />
      <br />
      <span>{temperature} °F</span>
      <br />
      <br />
      <br />
      <small>{weather}</small>
    </div>
  )
}

export default ThirdContainer;
