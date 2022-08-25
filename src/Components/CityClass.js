import styled from "styled-components";
import React from "react";



const MainLogo = styled.img`
  width: 150px;
  height: 150px;
  margin: 50px auto;
`;

const CityText = styled.span`
display: flex;
flex-direction: row;
border: black solid 1 px;
border-radius: 2px;
color: black;
font-size: 18px;
font-weight: bold;
margin 10px auto;
`;

const InputBox = styled.form`
display: flex;
flex-direction: row;
border-radius: 2px;
justify-content: space-evenly;
margin: 20px;
border: black solid 1px;

& button {
    background-color: black;
    font-size: 14px;
    border: none;
    padding: 0 10px;
    font-weight: bold;
    color: white;
    outline: none;
    cursor: pointer;
    font-family: Oswald;
  }

& input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Oswald;
    font-weight: bold;
  }

`;

const CityClass = (props) => {

    const {updateCity, getWeather} = props;

    return (
        <>
        <MainLogo src = "/logos/app-logo.svg" />
        <CityText>Find the City</CityText>
        <InputBox onSubmit={getWeather}>
        <input 
        onChange= {(e) => updateCity(e.target.value)}
        placeholder="City" 
         />
        <button type = {"submit"}>Search</button> 
        </InputBox>
        </>
    );
};

export default CityClass;