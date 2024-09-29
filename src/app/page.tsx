"use client"
import Image from "next/image";
import Header from "./component/Header";
import Main from './component/Main'
import axios from 'axios';
import { WEATHER_API_KEY } from "../constant.js";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState<any>('')
  const [weatherData, setWeatherData] = useState<any>([])
  const getCityData = async () => {
    try {
      const response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${WEATHER_API_KEY}`)

      const temResponse = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${WEATHER_API_KEY}`)

      const { data } = response

      setWeatherData(data)
      console.log("search", search);
      console.log("weather", weatherData);

    } catch (error) {

    }
  }

  return (
    <div className="bg-neutral-500 h-screen">
      <Header getCityData={getCityData} search={search} setSearch={setSearch} weatherData={weatherData} />
      <Main weatherData={weatherData} />
    </div>
  );
}
