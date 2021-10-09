import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {WeatherForCityResponseType} from '../../api/openWeather/types/WeatherForCityResponseType';

type InitialStateType = {
    weatherData: WeatherForCityResponseType | null,
    cityName: string;
}

const initialState: InitialStateType = {
    weatherData: null,
    cityName: '',
};

export const weatherReducer = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeatherData(state,
            action: PayloadAction<WeatherForCityResponseType>) {
            state.weatherData = action.payload;
        },
        setCityName(state,
            action: PayloadAction<string>) {
            state.cityName = action.payload;
        },
    },
});

export const {setWeatherData, setCityName} = weatherReducer.actions;
export default weatherReducer.reducer;