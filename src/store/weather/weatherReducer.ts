import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {WeatherForCityResponseType} from '../../api/openWeather/types/WeatherForCityResponseType';
import {openWeatherDefaultCity} from '../../config/Config';

type InitialStateType = {
    weatherData: WeatherForCityResponseType | null,
    cityName: string;
    loading: boolean;
}

const initialState: InitialStateType = {
    weatherData: null,
    cityName: openWeatherDefaultCity,
    loading: false,
};

export const weatherReducer = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeatherData(state,
            action: PayloadAction<WeatherForCityResponseType | null>) {
            state.weatherData = action.payload;
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

export const {setWeatherData, setCityName, setLoading} = weatherReducer.actions;
export default weatherReducer.reducer;