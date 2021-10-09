import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CurrentWeatherForCityResponseType} from '../../api/openWeather/types/CurrentWeatherForCityResponseType';
import {openWeatherDefaultCity} from '../../config/Config';

type InitialStateType = {
    weatherData: CurrentWeatherForCityResponseType | null,
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
            action: PayloadAction<CurrentWeatherForCityResponseType | null>) {
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