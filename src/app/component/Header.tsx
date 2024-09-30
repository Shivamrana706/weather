"use client"

import { useState } from "react";
import { IoSunnyOutline, IoLocationOutline, IoSearchCircleOutline, IoSearchCircleSharp } from "react-icons/io5";
import axios from 'axios';
import { WEATHER_API_KEY } from "../../constant.js";

interface YourComponentProps {
    getCityData: () => Promise<void>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    weatherData: any
    location: string
}

const Header: React.FC<YourComponentProps> = ({ getCityData, search, setSearch, weatherData, location }) => {

    // const API_Key: any = WEATHER_API_KEY;


    // const getCityData = async () => {
    //     try {
    //         const response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_Key}`)
    //         const { data } = response
    //         console.log("data", data);

    //     } catch (error) {

    //     }
    // }

    return (
        <div className="flex p-3 justify-between items-center text-white">
            <div className="flex text-center items-center">
                <p className="text-3xl mx-2 font-semibold ">Weather</p>
                <IoSunnyOutline size={25} color="yellow" />
            </div>
            <div className="flex items-center text-white justify-evenly ">
                <IoLocationOutline />
                <p className="mr-2 font-serif">{location !== null ? location : 'city'}</p>
                <input
                    className="mr-1 rounded-full px-3 py-1 text-black font-mono "
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <IoSearchCircleSharp onClick={getCityData} className="mr-2" color="yellow" size={40} />
            </div>
        </div>
    )
}
export default Header;