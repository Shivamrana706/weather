"use client"
import React, { useEffect, useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { BsCloudLightningFill } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";
import axios from 'axios';
import { useSelector, UseSelector } from 'react-redux';



const Main: React.FC<any> = () => {
    // const rightArray: string[] = ['fadfasdf', 'fasdfsd', 'fasdd', 'fasd', 'fads']
    const bottomDIvARRAy: number[] = [12, 132, 21, 12, 312, 32]
    // const [todayDate, setTodayDate] = useState<any>()

    // const [forcastData, setForcastDats] = useState([]);
    const weatherData: any = useSelector<any>((state: any) => state.weatherData);
    const forcastWeatherData: any = useSelector<any>((state: any) => state.forcastWeatherData)

    // console.warn('forcastWeatherData uppe', forcastWeatherData)

    const today = new Date();
    // useEffect(() => {
    //     // Only call `filteredData()` when `forcastData` changes


    // }, [forcastWeatherData.list])

    // console.log(weatherData.list);
    // console.log(weatherData, "weatherdata in main ");
    // useEffect(() => {
    //     getForcastData();


    // }, [])
    // useEffect(() => {
    //     filteredData(forcastData);
    // }, [forcastData])
    // const getForcastData = async () => {
    //     const { data } = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=brampton&appid=2c85aeefc744b275e96c40dd5304e91f`)

    //     saveData(data.list)
    //     // console.log("bigResponse.data.list", data);
    //     // console.warn("forcastData", typeof forcastData);


    // }
    // function saveData(data: any) {
    //     // console.log("saveData");
    //     setForcastDats(data)


    //     // console.log("expre", forcastData);
    // }
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(today.getDate()).padStart(2, '0');


        return `${year}-${month}-${day}`
    };
    // getTodayDate()
    // console.log('getTodayDate()', getTodayDate())

    const newDate: any = [];
    const [newdateData, setNewdateData] = useState<any>([])


    const filteredData = (forcastData: any[]) => {
        // console.log('forcastData filter data', forcastData)
        let initalData: string = '';
        forcastData.map((item, key) => {
            if (item.dt_txt.split(' ')[0] !== initalData) {
                // console.log(key, "key");
                initalData = item.dt_txt.split(' ')[0];
                newDate.push(item)
                // setNewdateData([item.dt_txt.split(' ')[0], ...newdateData])
                return null
            } else {
                // console.log("else");

            }
        })

    };


    // let hourlyData: any = []
    // const filteredHourData = (data: any) => {
    //     console.log('data', data[0].dt_txt)
    //     data.map((item: any) => {
    //         if (item.dt_txt.split(' ')[0] == getTodayDate()) {
    //             hourlyData.push(item)
    //             // console.log(getTodayDate(), "getTodaydata true");

    //         } else {
    //             // console.log(getTodayDate(), "getTodaydata");
    //             console.log('item.dt_txt.split(\' \')[0]', item.dt_txt.split(' ')[0])
    //         }
    //     })
    // }
    let hourlyDataSlice: any = []
    if (forcastWeatherData && forcastWeatherData.list && forcastWeatherData.list.length !== 0) {
        filteredData(forcastWeatherData.list)
        hourlyDataSlice = forcastWeatherData.list.slice(0, 6)

        // filteredHourData(forcastWeatherData.list)
        // console.log("insade if");

    } else {
        // console.log("insade else");
    }


    // console.log('forcastWeatherData', forcastWeatherData.list)
    // forcastWeatherData?.list.length == 0 ? filteredData(forcastWeatherData) : null
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [time, setTime] = useState<any>('');
    const [day, setDay] = useState<any>('');
    const [date, setDate] = useState<any>('')


    const showLiveTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');   // Get hours (24-hour format) and pad with 0
        const minutes = String(now.getMinutes()).padStart(2, '0'); // Get minutes and pad with 0
        const month = String(months[now.getMonth()])
        const todaydate = String(now.getDate())
        const todayDay = String(days[now.getDay()])
        const year = String(now.getFullYear());


        setTime(`${hours}:${minutes}`);
        setDate(`${todaydate} ${month}`)
        setDay(`${todayDay}`)


    }
    setInterval(showLiveTime, 6000);

    // const filterDate: any[] = forcastWeatherData.list?.filter((item: any) => (item.dt_txt).split(" ")[0] == getTodayDate());

    // console.log(filterDate, 'fileterData');
    // console.log(newDate, "newdata");
    // console.log('newdateDatra', newdateData)
    // console.log(weatherData, "weather");
    console.log('forcastWeatherData', forcastWeatherData.list)
    // console.log('hopurly data', hourlyData)
    console.log('hourlyDataSlice', hourlyDataSlice)

    // console.log('item.dt_txt.slice(\' \')[1]', hourlyDataSlice[0].dt_txt.slice(' ')[0])
    return (
        <div className='p-3 flex h-5/6 text-white'>
            <div className='leftDiv w-3/4 h-full '>
                <div className=
                    {
                        weatherData.length !== 0 ? weatherData.weather[0].main == 'Clear'
                            ? "leftUpperdiv flex rounded-lg bg-clear bg-cover bg-right h-3/4 px-5 py-5 text-white justify-between flex-col"
                            : "leftUpperdiv flex rounded-lg bg-cloudy bg-cover bg-right h-3/4 px-5 py-5 text-white justify-between flex-col"
                            : "leftUpperdiv flex rounded-lg bg-clear bg-cover bg-right h-3/4 px-5 py-5 text-white justify-between flex-col"
                    }
                >

                    <div className='flex items-center ml-1 font-medium text-xl'>
                        <IoLocationOutline />
                        <p>
                            {weatherData.length !== 0 ? weatherData.name : "location"}
                        </p>
                    </div>
                    <div className='flex justify-between mx-1 items-center'>
                        <div className=''>
                            <p className='mb-2'>weather Forcast</p>
                            <p className='text-4xl'>
                                {weatherData.length !== 0 ? weatherData.weather[0].main : "sun"}
                            </p>

                            <p className='font-thin text-sm ml-1'>
                                {weatherData.length !== 0 ? weatherData.weather[0].description : "weather"}
                            </p>



                        </div>

                        <div className='mr-4'>
                            {weatherData.length !== 0 ?
                                weatherData.weather[0].main == 'Clouds' ?
                                    <BsCloudLightningFill color='white' size={60} />
                                    : <IoIosSunny color='white' size={60} />
                                : null}
                        </div>
                    </div>
                </div>
                {/* //bg-stone-600 */}
                <div className='leftBottomdiv mt-3 h-1/4 text-white rounded-lg  bg-white bg-opacity-20 p-4'>
                    <p className=' text-lg font-bold ml-5'>Today's statistics</p>
                    <ul className='flex justify-around mt-2'>
                        {
                            hourlyDataSlice.length !== 0 ?
                                hourlyDataSlice.map((item: any, key: any) =>
                                    <li className='rounded border p-1  border-b-slate-500 w-full mr-2' key={key}>
                                        <div className='flex flex-col items-center justify-center'>
                                            <p className='text-2xl font-bold'>{((item.main.temp) - 275).toFixed(0)}°</p>
                                            <p>{(item.dt_txt.split(' ')[1]).slice(0, -3)}</p>

                                            <p className=' text-center'>{item.weather[0].description}</p>
                                        </div>
                                    </li>

                                )
                                : null
                        }
                    </ul>
                </div>
            </div>
            <div className="rightDiv text-white bg-white bg-opacity-20  w-3/12 h-full ml-5 p-5 rounded-lg  flex flex-col ">
                <div className='rightUpperdiv  border-b-2	'>
                    <div className='text-base flex justify-between items-center '>
                        <div className='flex items-center text-center'>
                            <p className='text-lg font-bold '>{day},</p>
                            <p className='ml-1 text-lg'>{date}</p>
                        </div>
                        <p className='ml-1 text-xl'>{time}</p>
                    </div>
                    <div className='flex flex-col items-center   mt-8 '>
                        <p className='text-7xl font-semibold ml-2'>
                            {weatherData.length !== 0 ? ((weatherData.main.temp) - 275).toFixed(0) : 18}°
                        </p>
                        <p className='mb-2'>Wind Speed:&nbsp;
                            {weatherData.length !== 0 ? (weatherData.wind.speed) + "KM" : null}
                        </p>
                    </div>

                </div>
                <br className='border border-white' />
                <div className='rightBottomdiv text-white '>
                    <p className='text-xl mb-1'>The next day Forcast</p>
                    <ul className=''>
                        {
                            newDate.length !== 0 ? newDate?.map((data: any) => (
                                <li className='border border-b-slate-500 rounded mb-2 text-center p-2 h-full'>
                                    <div className='flex justify-between w-full text-center items-center '>
                                        <div className='flex'>
                                            <p className='items-center flex mr-2'>{data.weather[0].main == 'Clouds' ? <BsCloudLightningFill color='white' /> : <IoIosSunny color='white' size={20} />} </p>
                                            <div className='flex flex-col'>

                                                <p className='flex justify-start'>{data.dt_txt.split(' ')[0]}</p>
                                                <p className='text-left'>{data.weather[0].description}</p>
                                            </div>
                                        </div>
                                        <p className='ml-2 border-l-2 pl-1 w-8'>{((data.main.temp) - 275).toFixed(0)}°</p>
                                    </div>
                                </li>


                            ))
                                : null
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