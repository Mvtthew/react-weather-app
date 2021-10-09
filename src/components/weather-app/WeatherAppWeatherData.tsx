import React from 'react';
import {WeatherAppWeatherIcon} from './WeatherAppWeatherIcon';
import {useAppSelector} from '../../hooks/useAppSelector';
import {PageSpinner} from '../ui/PageSpinner';
import {useLocales} from '../../hooks/useLocales';

export const WeatherAppWeatherData: React.FC = (): JSX.Element => {

    const {locales} = useLocales();

    const {weatherData, loading} = useAppSelector(state => state.weather);

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
                <h1>
                    {Math.floor(weatherData.main.temp)}°C
                </h1>
                <p>
                    {weatherData.weather[0].main}
                </p>
            </div>
        </>;
    }
    return <></>;
};