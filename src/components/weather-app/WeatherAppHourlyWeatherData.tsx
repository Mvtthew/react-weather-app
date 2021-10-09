import React from 'react';
import {useAppSelector} from '../../hooks/useAppSelector';
import {PageSpinner} from '../ui/PageSpinner';
import {useLocales} from '../../hooks/useLocales';
import {WeatherAppWeatherIcon} from './WeatherAppWeatherIcon';
import moment from 'moment';

export const WeatherAppHourlyWeatherData: React.FC = (): JSX.Element => {

    const {locales} = useLocales();

    const {hourlyWeatherData, loading} = useAppSelector(state => state.weather);

    const parseWeatherDate = (weatherDate: number): string => {
        let parsedDate = '';
        parsedDate = moment(weatherDate * 1000).utc(false).format('HH:mm');
        return parsedDate;
    };

    if (!hourlyWeatherData && !loading) return <>
        <p className="text-center py-5">{locales.noHourlyWeatherDataForCity}</p>
    </>;
    else if (loading) return <div className="w-100 py-5 text-center">
        <PageSpinner/>
    </div>;
    else if (hourlyWeatherData) return <>
        <div className="pt-4 px-4">
            <div className="overflow-auto">
                <div className="d-flex">
                    {hourlyWeatherData.list.map((
                        weatherData,
                        index) =>
                        <div key={`hourly-weather_${index}`}
                             className="hourly-weather-card">
                            <p className="text-center mb-0">
                                {parseWeatherDate(weatherData.dt)}
                            </p>
                            <div className="w-25">
                                <WeatherAppWeatherIcon icon={weatherData.weather[0].icon}
                                                       size={80}/>
                            </div>
                            <small className="d-block text-center">
                                {weatherData.weather[0].main}
                            </small>
                            <h5 className="fw-bold text-center">
                                {Math.floor(weatherData.main.temp)}°C
                            </h5>
                        </div>)}
                </div>
            </div>
        </div>
    </>;
    return <></>;
};