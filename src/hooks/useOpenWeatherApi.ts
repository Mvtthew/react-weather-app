import {OpenWeatherApi} from '../api/openWeather/OpenWeatherApi';

export const useOpenWeatherApi = () => {
    return new OpenWeatherApi();
};