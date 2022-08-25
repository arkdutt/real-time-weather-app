import Axios from "axios";
import React, {useState} from "react";
import styled from "styled-components";
import CityClass from "./Components/CityClass";
import WeatherClass from "./Components/WeatherClass";

const Container = styled.div`
display:flex;
flex-direction:column;
margin: auto;
align-items:center;
box-shadow: 0 3px 6px 0 #555;
width: 380px;
padding: 20px 10px;
background: white;
border-radius: 4px;
font-family: Oswald;
`;


const AppName = styled.div`
color: black;
font-size: 17px;
font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const getWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff85a45d46c0a5828ab00400451e046d`,
      );
    updateWeather(response.data);
  }; //fetching the weather data from the api above
  return (
    <Container>
      <AppName>Real-Time Weather App</AppName>
      {weather ? (
      <WeatherClass weather = {weather} />
      ) : (
      <CityClass updateCity={updateCity} getWeather={getWeather} />
      )}
      {/* If the weather is available, then show the weatherClass. Otherwise, the cityClass would be visible */}

    </Container>
  );
}

export default App;
