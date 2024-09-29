import React, { useEffect } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { BsCloudLightningFill } from "react-icons/bs";
import { WEATHER_API_KEY } from "../../constant.js";
import axios from 'axios';


const Main: React.FC<any> = ({ weatherData }) => {



    const today = new Date();
    console.log(today);
    console.log(weatherData, "weatherdata in main ");


    const bottomDIvARRAy: number[] = [12, 132, 21, 12, 312, 32]
    const rightArray: string[] = ['fadfasdf', 'fasdfsd', 'fasdd', 'fasd', 'fads']
    return (
        <div className='p-3 flex h-5/6 text-white'>
            <div className='leftDiv w-3/4 h-full '>
                <div className="leftUpperdiv flex rounded-lg bg-cloudy bg-cover bg-right h-3/4 px-5 py-5 text-white justify-between flex-col" >
                    <div className='flex items-center ml-1 font-medium text-xl'>
                        <IoLocationOutline />
                        <p>{weatherData.length !== 0 ? weatherData.name : "location"}</p>
                    </div>
                    <div className='flex justify-between mx-1 items-center'>
                        <div className=''>
                            <p className='mb-2'>weather Forcast</p>
                            <p className='text-4xl'>{weatherData.length !== 0 ? weatherData.weather[0].main : "sun"}</p>

                            <p className='font-thin text-sm ml-1'>{weatherData.length !== 0 ? weatherData.weather[0].description : "weather"}</p>



                        </div>
                        <div className='mr-4'>
                            <BsCloudLightningFill color='white' size={60} />
                        </div>
                    </div>
                </div>
                <div className='leftBottomdiv mt-3 h-1/4 text-white rounded-lg bg-stone-600 p-4'>
                    <p className='font-thin text-sm ml-5'>Today's statistics</p>
                    <ul className='flex justify-around mt-2'>
                        {
                            bottomDIvARRAy.map((item, key) =>
                                <li className='rounded border p-5  border-b-slate-500' key={key}>{item}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className="rightDiv text-white  w-3/12 h-full ml-5 p-5 rounded-lg bg-neutral-400 flex flex-col ">
                <div className='rightUpperdiv  border-b-2	'>
                    <div className='text-base flex justify-between'>
                        <p>{ }</p>
                        <p>1:100pm</p>
                    </div>
                    <div className='flex flex-col items-center   mt-8 '>
                        <p className='text-7xl font-semibold ml-2'>{weatherData.length !== 0 ? ((weatherData.main.temp) - 275).toFixed(0) : 18}°</p>
                        <p className='mb-2'>Northwest ,{weatherData.length !== 0 ? weatherData.wind.speed : "43"}</p>
                    </div>

                </div>
                <br className='border border-white' />
                <div className='rightBottomdiv text-white'>
                    <p className='text-xl mb-1'>The next day Forcast</p>
                    <ul>
                        {
                            rightArray.map((item, key) =>
                                <li className='flex justify-between border-b-2 rounded-md px-3 py-2' key={key}>
                                    <p>{item}</p>
                                    <p>{26}</p>
                                </li>


                            )
                        }
                    </ul>

                </div>
            </div>
        </div >
    )
}

export default Main;