import { createSlice } from "@reduxjs/toolkit";



const initialState = { weatherData: [], forcastWeatherData: [] }

const slice = createSlice({
    name: "add_weather_data",
    initialState,
    reducers: {
        addWeatherData: (state = initialState, action) => {
            if (action.payload !== 0) {
                state.weatherData = action.payload
            } else {
                console.log("No data in addWeather payload ", action.payload);
                return state
            }

            return state
        },
        addForcastWeatherData: (state = initialState, action) => {
            if (action.payload !== 0) {
                state.forcastWeatherData = action.payload
            }
            else {
                console.log("No data in addWeather payload ", action.payload);
                return state

            }
            return state

        }
    }
})
export const { addWeatherData, addForcastWeatherData } = slice.actions;

export default slice.reducer
