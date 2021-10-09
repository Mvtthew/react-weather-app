import React from 'react';
import {WeatherAppWeatherIcon} from './WeatherAppWeatherIcon';
import {useAppSelector} from '../../hooks/useAppSelector';
import {PageSpinner} from '../ui/PageSpinner';
import {useLocales} from '../../hooks/useLocales';
import {WeatherAppInfoCards} from './WeatherAppInfoCards';
import {WeatherCardDataType} from '../../types/WeatherCardDataType';

export const WeatherAppCurrentWeatherData: React.FC = (): JSX.Element => {

    const {locales} = useLocales();

    const {currentWeatherData, loading} = useAppSelector(state => state.weather);

    const generateCardsData = (): WeatherCardDataType[] => {
        if (currentWeatherData)
            return [
                {title: locales.wind, value: `${currentWeatherData.wind.speed.toString()} ${locales.kmph}`},
                {title: locales.humidity, value: currentWeatherData.main.humidity.toString() + '%'},
                {title: locales.visibility, value: currentWeatherData.visibility + 'm'},
                {title: locales.feelsLike, value: Math.floor(currentWeatherData.main.feels_like).toString() + '°C'},
            ];
        return [];
    };

    if (!currentWeatherData && !loading) return <>
        <p className="text-center py-5">{locales.noCurrentWeatherDataForCity}</p>
    </>;
    else if (loading) return <div className="w-100 py-5 text-center">
        <PageSpinner/>
    </div>;
    else if (currentWeatherData) {
        return <>
            <div className="text-center">
                <WeatherAppWeatherIcon icon={currentWeatherData.weather[0].icon}/>
                <p className="mb-0">
                    {currentWeatherData.weather[0].main}
                </p>
                <h1 className="fw-bold display-4 mb-5">
                    {Math.floor(currentWeatherData.main.temp)}°C
                </h1>
                <WeatherAppInfoCards cardsData={generateCardsData()}/>
            </div>
        </>;
    }
    return <></>;
};