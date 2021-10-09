import axios, {AxiosResponse} from 'axios';
import {defaultLocaleKey, openWeatherApiKey, openWeatherApiUrl, openWeatherIconUrl} from '../../config/Config';
import {CurrentWeatherForCityResponseType} from './types/CurrentWeatherForCityResponseType';

export class OpenWeatherApi {
    apiUrl: string;
    apiKey: string;

    constructor() {
        this.apiUrl = openWeatherApiUrl;
        this.apiKey = openWeatherApiKey;
    }

    public async getCurrentWeatherForCityName(cityName: string): Promise<AxiosResponse<CurrentWeatherForCityResponseType>> {
        const url = `${this.apiUrl}weather?q=${cityName}&appid=${this.apiKey}&units=metric&lang=${defaultLocaleKey}`;
        return await axios.get<CurrentWeatherForCityResponseType>(url);
    }

    public async getHourlyWeatherForCityName(cityName: string): Promise<AxiosResponse<CurrentWeatherForCityResponseType>> {
        const url = `${this.apiUrl}weather?q=${cityName}&appid=${this.apiKey}&units=metric&lang=${defaultLocaleKey}`;
        return await axios.get<CurrentWeatherForCityResponseType>(url);
    }

    public generateIconImageUrl(icon: string) {
        return `${openWeatherIconUrl}${icon}@4x.png`;
    }
}