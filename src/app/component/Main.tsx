"use client"
import React, { useEffect, useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { BsCloudLightningFill } from "react-icons/bs";
import axios from 'axios';



const Main: React.FC<any> = ({ weatherData }) => {
    const rightArray: string[] = ['fadfasdf', 'fasdfsd', 'fasdd', 'fasd', 'fads']
    const bottomDIvARRAy: number[] = [12, 132, 21, 12, 312, 32]

    const [forcastData, setForcastDats] = useState([]);

    const today = new Date();


    // console.log(weatherData.list);
    // console.log(weatherData, "weatherdata in main ");
    useEffect(() => {
        getForcastData();


    }, [])
    useEffect(() => {
        filteredData(forcastData);
    }, [forcastData])
    const getForcastData = async () => {
        const { data } = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=brampton&appid=2c85aeefc744b275e96c40dd5304e91f`)

        saveData(data.list)
        // console.log("bigResponse.data.list", data);
        // console.warn("forcastData", typeof forcastData);


    }
    function saveData(data: any) {
        // console.log("saveData");
        setForcastDats(data)


        // console.log("expre", forcastData);
    }
    // const getTodayDate = () => {
    //     const today = new Date();
    //     const year = today.getFullYear();
    //     const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    //     const day = String(today.getDate()).padStart(2, '0');

    //     return `${year}-${month}-${day}`;
    // };

    const newData: any = [];
    const [newSata, setNewSaat] = useState<any>([])
    // function consoli() {
    //     console.warn(newData, 'newdata');
    //     console.warn(newData[0].dt_txt, 'newData[0].dt_txt');
    // }
    const filteredData = (forcastData: any) => {
        let initalData: string = '';
        for (let item of forcastData) {
            // console.log(item, 'item');

            if (item.dt_txt.split(' ')[0] !== initalData) {
                newData.push(item);
                setNewSaat([...newSata, item])
                initalData = item.dt_txt.split(' ')[0];
            } else {
                console.log("else ")
            }
            console.log(newData, 'newData', newSata);

        }

    };



    // const filterDate: any[] = forcastData.filter((item) => (item.dt_txt).split(" ")[0] == getTodayDate());
    // console.log(filterDate, 'fileterData');
    return (
        <div className='p-3 flex h-5/6 text-white'>
            <div className='leftDiv w-3/4 h-full '>
                <div className={
                    weatherData.length !== 0 ? weatherData.weather[0].main == 'Clear'
                        ? "leftUpperdiv flex rounded-lg bg-clear bg-cover bg-right h-3/4 px-5 py-5 text-white justify-between flex-col"
                        : "leftUpperdiv flex rounded-lg bg-cloudy bg-cover bg-right h-3/4 px-5 py-5 text-white justify-between flex-col"
                        : "leftUpperdiv flex rounded-lg bg-clear bg-cover bg-right h-3/4 px-5 py-5 text-white justify-between flex-col"
                } >

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
                {/* //bg-stone-600 */}
                <div className='leftBottomdiv mt-3 h-1/4 text-white rounded-lg  bg-white bg-opacity-20 p-4'>
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
            <div className="rightDiv text-white bg-white bg-opacity-20  w-3/12 h-full ml-5 p-5 rounded-lg  flex flex-col ">
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

                        {/* <p>{newData[0].dt_txt}</p> */}
                        {
                            newData.length == 0 ? "hello" : newData.map((item: any, key: any) =>
                                <li className='flex justify-between border-b-2 rounded-md px-3 py-2' key={key}>
                                    <p>{item.dt_txt.split(' ')[0]}</p>
                                    <p>{((item.main.temp) - 275).toFixed(0)}</p>

                                </li>


                            )
                        }
                    </ul>

                </div>
            </div>
            {/* <LeftSide weatherData={weatherData} />
            <RightSide weatherData={weatherData} /> */}

        </div >
    )
}

export default Main;