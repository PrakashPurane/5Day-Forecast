import React from "react";
import MainContainer from "./components/Main/mainContainer";
import SecondContainer from "./components/Second/secondContainer";
import ThirdContainer from "./components/Third/thirdContainer";
import "./App.css";

const App = () => {
  const weatherData = [
    { day: "Friday", date: "March 1st", time: "9:00 AM", temperature: "45", weather: "partly cloudy" },
    { day: "Tuesday", date: "March 5th", time: "10:00 AM", temperature: "50", weather: "sunny" },
    { day: "Wednesday", date: "March 6th", time: "11:00 AM", temperature: "55", weather: "overcast" },
    { day: "Thursday", date: "March 7th", time: "12:00 PM", temperature: "60", weather: "rainy" },
    { day: "Friday", date: "March 8th", time: "1:00 PM", temperature: "65", weather: "clear sky" },
  ];
  return (
    <>

      <MainContainer />
      <SecondContainer/>
    <div className="app">
      {weatherData.map((data, index) => (
        <ThirdContainer 
        key={index}
        day={data.day}
        date={data.date}
        time={data.time}
        temperature={data.temperature}
        weather={data.weather}
        />
      ))}
      </div>
    </>
  );
};

export default App;
