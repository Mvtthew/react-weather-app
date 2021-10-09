import {Locales} from '../localization/Locales';

export const defaultLocaleKey = process.env.REACT_APP_DEFAULT_LOCALE as keyof typeof Locales;
export const openWeatherApiUrl = process.env.REACT_APP_OPEN_WEATHER_API_URL as string;
export const openWeatherIconUrl = process.env.REACT_APP_OPEN_WEATHER_ICON_URL as string;
export const openWeatherApiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY as string;
export const openWeatherDefaultCity = process.env.REACT_APP_DEFAULT_CITY as string;