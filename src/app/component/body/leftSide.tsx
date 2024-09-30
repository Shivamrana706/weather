import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { BsCloudLightningFill } from "react-icons/bs";



const LeftSide = (weatherData: any) => {
    const bottomDIvARRAy: number[] = [12, 132, 21, 12, 312, 32]
    return (
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
    )
}

export default LeftSide