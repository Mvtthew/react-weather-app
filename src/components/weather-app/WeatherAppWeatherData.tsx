import React from 'react';
import {WeatherAppWeatherIcon} from './WeatherAppWeatherIcon';
import {useAppSelector} from '../../hooks/useAppSelector';
import {PageSpinner} from '../ui/PageSpinner';
import {useLocales} from '../../hooks/useLocales';
import {WeatherAppInfoCards} from './WeatherAppInfoCards';
import {WeatherCardDataType} from '../../types/WeatherCardDataType';

export const WeatherAppWeatherData: React.FC = (): JSX.Element => {

    const {locales} = useLocales();

    const {weatherData, loading} = useAppSelector(state => state.weather);

    const generateCardsData = (): WeatherCardDataType[] => {
        if (weatherData)
            return [
                {title: locales.wind, value: `${weatherData.wind.speed.toString()} ${locales.kmph}`},
                {title: locales.humidity, value: weatherData.main.humidity.toString() + '%'},
                {title: locales.visibility, value: weatherData.visibility + 'm'},
                {title: locales.feelsLike, value: Math.floor(weatherData.main.feels_like).toString() + '°C'},
            ];
        return [];
    };

    if (!weatherData && !loading) return <>
        <p className="text-center py-5">{locales.noWeatherDataForCity}</p>
    </>;
    else if (loading) return <div className="w-100 py-5 text-center">
        <PageSpinner/>
    </div>;
    else if (weatherData) {
        return <>
            <div className="text-center">
                <WeatherAppWeatherIcon icon={weatherData.weather[0].icon}/>
                <p className="mb-0">
                    {weatherData.weather[0].main}
                </p>
                <h1 className="fw-bold display-4 mb-5">
                    {Math.floor(weatherData.main.temp)}°C
                </h1>
                <WeatherAppInfoCards cardsData={generateCardsData()}/>
            </div>
        </>;
    }
    return <></>;
};