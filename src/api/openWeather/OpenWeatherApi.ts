import axios, {AxiosResponse} from 'axios';
import {defaultLocaleKey, openWeatherApiKey, openWeatherApiUrl, openWeatherIconUrl} from '../../config/Config';
import {WeatherForCityResponseType} from './types/WeatherForCityResponseType';

export class OpenWeatherApi {
    apiUrl: string;
    apiKey: string;

    constructor() {
        this.apiUrl = openWeatherApiUrl;
        this.apiKey = openWeatherApiKey;
    }

    public async getWeatherForCityName(cityName: string): Promise<AxiosResponse<WeatherForCityResponseType>> {
        const url = `${this.apiUrl}weather?q=${cityName}&appid=${this.apiKey}&units=metric&lang=${defaultLocaleKey}`;
        return await axios.get<WeatherForCityResponseType>(url);
    }

    public generateIconImageUrl(icon: string) {
        return `${openWeatherIconUrl}${icon}@4x.png`;
    }
}