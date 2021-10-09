import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CurrentWeatherForCityResponseType} from '../../api/openWeather/types/CurrentWeatherForCityResponseType';
import {openWeatherDefaultCity} from '../../config/Config';
import {HourlyWeatherForCityResponseType} from '../../api/openWeather/types/HourlyWeatherForCityResponseType';

type InitialStateType = {
    currentWeatherData: CurrentWeatherForCityResponseType | null,
    hourlyWeatherData: HourlyWeatherForCityResponseType | null,
    cityName: string;
    loading: boolean;
}

const initialState: InitialStateType = {
    currentWeatherData: null,
    hourlyWeatherData: null,
    cityName: openWeatherDefaultCity,
    loading: false,
};

export const weatherReducer = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setCurrentWeatherData(state,
            action: PayloadAction<CurrentWeatherForCityResponseType | null>) {
            state.currentWeatherData = action.payload;
        },
        setHourlyWeatherData(state,
            action: PayloadAction<HourlyWeatherForCityResponseType | null>) {
            state.hourlyWeatherData = action.payload;
        },
        setCityName(state,
            action: PayloadAction<string>) {
            state.cityName = action.payload;
        },
        setLoading(state,
            action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    },
});

export const {setCurrentWeatherData, setHourlyWeatherData, setCityName, setLoading} = weatherReducer.actions;
export default weatherReducer.reducer;