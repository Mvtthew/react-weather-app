import React from 'react';
import {DefaultLayout} from '../layouts/Detault.layout';
import {WeatherAppCitySearch} from '../components/weather-app/WeatherAppCitySearch';
import {WeatherAppCity} from '../components/weather-app/WeatherAppCity';
import {useAppSelector} from '../hooks/useAppSelector';
import moment from 'moment';
import {WeatherAppWeatherData} from '../components/weather-app/WeatherAppWeatherData';

export const HomeView: React.FC<{}> = (): JSX.Element => {

    const {weatherData, cityName, loading} = useAppSelector(state => state.weather);

    const localizationDate = () => {
        let dateString = '';
        if (weatherData) {
            dateString += moment(weatherData.dt * 1000 + weatherData.timezone * 1000)
                .utc(false)
                .format('HH:mm');
            const hoursAfterUtc = moment.duration(weatherData.timezone * 1000).hours();
            dateString += ` (GMT${weatherData.timezone > 0 ? '+' : ''}${hoursAfterUtc}:00)`;
        }
        return dateString;
    };

    return <>
        <DefaultLayout>
            <div className="d-flex justify-content-between p-4">
                <WeatherAppCity cityName={weatherData ? weatherData.name : cityName}
                                localizationDescription={localizationDate()}/>
                <WeatherAppCitySearch/>
            </div>
            <WeatherAppWeatherData/>
        </DefaultLayout>
    </>;
};