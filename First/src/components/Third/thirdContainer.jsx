// ThirdContainer.jsx
import React from 'react';
import { IoMdSunny } from "react-icons/io";
import './thirdContainer.css';

const ThirdContainer = ({ day, date, time, temperature, weather }) => {
  return (
    <div className="third">
      <h1>{day}</h1>
      <p>{date}, {time}</p>
      <IoMdSunny className='sunny' />
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
