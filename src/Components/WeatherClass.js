import styled from "styled-components";

const WeatherStatus = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
justify-content: space-between;
margin: 30px auto;
`;

const Temp = styled.span`
margin: 20px auto;
font-size: 14px;

& span {
    font-size: 28px;

}

`;

const Place = styled.span`
font-size: 30px;
font-weight: bold;

`


const WeatherIcon = styled.img`
width: 100px;
height: 100px;
margin: 10px auto;
`;

const Info = styled.span`
font-size: 15px;
font-weight: bold;
margin: 20px;
text-align: start;
width: 80%;
`;

const InfoSpace = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
   
const InfoChar = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

export const WeatherInfoIcons = {
    sunrise: "/logos/sunrise.svg",
    sunset: "/logos/sunrise.svg",
    humidity: "/logos/humidity.svg",
    wind: "/logos/wind.svg",
    feels_like: "/logos/feels-like.svg",
};

const InfoSpacePlus  = (props) => {
    const {name, value} = props;

    return (
        <InfoContainer>
            <InfoIcon src = {WeatherInfoIcons[name]}/>
            <InfoChar>
                {value}
                <span>{name}</span>
            </InfoChar>
        </InfoContainer>
    )
}

export const WeatherIcons = {
    "01d": "/logos/sunny.svg",
    "01n": "/logos/night.svg",
    "02d": "/logos/day.svg",
    "02n": "/logos/cloudy-night.svg",
    "03d": "/logos/cloudy.svg",
    "03n": "/logos/cloudy.svg",
    "04d": "/logos/perfect-day.svg",
    "04n": "/logos/cloudy-night.svg",
    "09d": "/logos/rain.svg",
    "09n": "/logos/rain.svg",
    "10d": "/logos/rain.svg",
    "10n": "/logos/rain.svg",
    "11d": "/logos/storm.svg",
    "11n": "/logos/storm.svg",
    "13d": "/logos/snow.svg",
    "13n": "/logos/snow.svg",
    "50d": "/logos/mist.svg",
    "50n": "/logos/mist.svg",
  };


const WeatherClass = (props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d'); //Checks if it is a day
    const getTime = (timeLabel) => {
        return `${new Date(timeLabel*1000).getHours()} : ${new Date(timeLabel*1000).getMinutes()}`
    }
    return ( 
    <>
    <WeatherStatus>
        <Temp><span> {`${Math.floor(weather?.main?.temp-273)}°C`} </span>{` | ${weather?.weather[0].description}`} </Temp>
        <WeatherIcon src = {WeatherIcons[weather?.weather[0].icon]} />
    </WeatherStatus>
    <Place>{`${weather?.name}, ${weather?.sys?.country}`}</Place>
    <Info>Weather Info</Info>
    <InfoSpace>


    <InfoSpacePlus name= {isDay?"sunset" : "sunrise"} 
    value = {getTime(weather?.sys[isDay ? "sunset" : "sunrise"])} />
    <InfoSpacePlus name="humidity" value = {weather?.main?.humidity} />
    <InfoSpacePlus name="wind" value =  {weather?.wind?.speed} />
    <InfoSpacePlus name="feels_like" value = {`${Math.floor(weather?.main?.feels_like - 273)}°C`} />


    </InfoSpace>
    </>
    );
}

export default WeatherClass;