import React from "react";
import MainContainer from "./components/Main/mainContainer";
import SecondContainer from "./components/Second/secondContainer";
import ThirdContainer from "./components/Third/thirdContainer";
import { IoMdSunny } from "react-icons/io";
import { IoMdRainy } from "react-icons/io";
import { BsFillCloudsFill } from "react-icons/bs";
import { FaCloudSun } from "react-icons/fa";
import "./App.css";

const App = () => {
  const weatherData = [
    { day: "Friday", date: "March 1st", time: "1:00 pm", temperature: "35", weather: "clear sky", icon:<IoMdSunny className="sunny" /> },
    { day: "Saturday", date: "March 2nd", time: "1:00 pm", temperature: "36", weather: "light rain", icon:<IoMdRainy className="sunny"/>},
    { day: "Wednesday", date: "March 3rd", time: "1:00 pm", temperature: "36", weather: "broken clouds",  icon:<BsFillCloudsFill className="sunny" /> },
    { day: "Thursday", date: "March 4th", time: "1:00 pm", temperature: "34", weather: "clear sky",  icon:<IoMdSunny className="sunny" /> },
    { day: "Friday", date: "March 5th", time: "1:00 pm", temperature: "26", weather: "scattered clouds", icon:<FaCloudSun className="sunny" />  },
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
        icon={data.icon}
        />
      ))}
      </div>
    </>
  );
};

export default App;
