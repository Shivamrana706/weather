"use client"
import Header from "./component/Header";
import Main from './component/Main'
import axios, { AxiosResponse } from 'axios';
require('dotenv').config();
import { WEATHER_API_KEY } from "../constant.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWeatherData, addForcastWeatherData } from "./redux/slice";

export default function Home() {
  const [search, setSearch] = useState<any>('');
  const [location, setLocation] = useState<string>('');
  const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
  const dispatch = useDispatch();
  // 
  useEffect(() => {

    getLocation();
  }, [])

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getFirstData(position.coords.longitude, position.coords.latitude);

    })
  }
  const getFirstData = async (lon: any, lat: any) => {
    try {
      const initialWeatherData: any = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
      const initialForcastWeatherData: any = await axios(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=3&appid=${WEATHER_API_KEY}`)
      dispatch(addWeatherData(initialWeatherData.data))
      dispatch(addForcastWeatherData(initialForcastWeatherData.data))
      setLocation(initialWeatherData.data.name)
    } catch (error: any) {

      if (error.response) {

        console.log('Error data:', error.response.data);
        console.log('Error status:', error.response.status);
      } else if (error.request) {

        console.error('No response received:', error.request);
      } else {

        console.error('Error', error.message);
      }
    }

  }
  const weatherData: any = useSelector<any>((state: any) => state.weatherData);

  return (
    <div className=
      {weatherData.length !== 0 ? weatherData.weather[0].main !== 'Clear' ? "bg-neutral-500 h-screen" : "bg-sky-900 h-screen" : "bg-sky-900 h-screen"}
    >
      <Header location={location} />
      <Main />
    </div >
  );
}
