"use client"

import { useState } from "react";
import { IoSunnyOutline, IoSearchCircleSharp } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import axios from 'axios';
import { WEATHER_API_KEY } from "../../constant.js";
import { useDispatch } from 'react-redux';


import { addForcastWeatherData, addWeatherData } from "../redux/slice.js";


interface YourComponentProps {
    location: string
}

const Header: React.FC<YourComponentProps> = ({ location }) => {
    const dispatch = useDispatch();


    const [search, setSearch] = useState<any>('');

    const onButtonClick = async () => {
        try {
            const weatherData = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${WEATHER_API_KEY}`);
            // console.log('weatherData', weatherData)
            const forcastWeatherData = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${WEATHER_API_KEY}`);
            // console.log('forcastWeatherData', forcastWeatherData)
            dispatch(addWeatherData(weatherData.data));
            dispatch(addForcastWeatherData(forcastWeatherData.data));
        } catch (error: any) {
            if (error.status == 404) {
                console.error('error.status', error.status)
                return alert("City not found ")
            }
            if (error.response) {

                console.error('Error status:', error.response.status);
            }
        }
    }

    return (
        <div className="flex p-3 justify-between items-center text-white sm:w-full">
            <div className="flex text-center items-center">
                <p className="sm:text-3xl sm:mx-2 sm:font-semibold text-2xl ">Weather</p>
                <IoSunnyOutline size={25} color="yellow" />
            </div>
            <div className="sm:flex sm:items-center sm:text-white sm:justify-evenly flex   ">
                <div className="sm:flex items-center hidden "><FaLocationCrosshairs />
                    <p className="mr-2 ml-1 font-serif">
                        {
                            location ? location : null
                        }

                    </p>
                </div>
                <input
                    className="mr-1 rounded-full px-2 sm:px-3 py-1 text-black font-mono "
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <IoSearchCircleSharp onClick={onButtonClick} className="mr-2" color="yellow" size={40} />
            </div>
        </div>
    )
}
export default Header;