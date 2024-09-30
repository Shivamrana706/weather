import React from 'react'


const RightSide = (weatherData: any) => {

    const rightArray: string[] = ['fadfasdf', 'fasdfsd', 'fasdd', 'fasd', 'fads']
    return (
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
    )
}

export default RightSide
