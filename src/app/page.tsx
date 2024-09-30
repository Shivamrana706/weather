"use client"
import Image from "next/image";
import Header from "./component/Header";
import Main from './component/Main'
import axios from 'axios';
import { WEATHER_API_KEY } from "../constant.js";
import { useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState<any>('');


  const [location, setLocation] = useState<string>('');

  const [weatherData, setWeatherData] = useState<any>([])
  useEffect(() => {
    getLocation();
  }, [])
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getFirstData(position.coords.longitude, position.coords.latitude);

    })
  }
  const getFirstData = async (lon: any, lat: any) => {
    const initialData = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    setWeatherData(initialData.data)
    setLocation(initialData.data.name)
    // console.log(weatherData, "weather data in useeffact ");

  }
  const getCityData = async () => {
    try {

      const response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${WEATHER_API_KEY}`)
      const { data } = response
      setWeatherData(data)
      // console.log("search", search);
      console.log("weather", weatherData);




    } catch (error) {

    }
  }

  return (
    //{weatherData.weather[0].main !== 'clear' ? "bg-neutral-500 h-screen" : "bg-sky-400 h-screen"}
    <div className={weatherData.length !== 0 ? weatherData.weather[0].main !== 'Clear' ? "bg-neutral-500 h-screen" : "bg-sky-900 h-screen" : "bg-sky-900 h-screen"}>
      <Header getCityData={getCityData} search={search} setSearch={setSearch} weatherData={weatherData} location={location} />
      <Main weatherData={weatherData} />
    </div >
  );
}
