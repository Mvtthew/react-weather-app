import React from 'react';
import {DefaultLayout} from '../layouts/Detault.layout';
import {WeatherAppCitySearch} from '../components/weather-app/WeatherAppCitySearch';
import {WeatherAppCity} from '../components/weather-app/WeatherAppCity';
import {useAppSelector} from '../hooks/useAppSelector';
import moment from 'moment';
import {WeatherAppCurrentWeatherData} from '../components/weather-app/WeatherAppCurrentWeatherData';
import {WeatherAppHourlyWeatherData} from '../components/weather-app/WeatherAppHourlyWeatherData';
import {PageSeparator} from '../components/ui/PageSeparator';

export const HomeView: React.FC<{}> = (): JSX.Element => {

    const {currentWeatherData, cityName} = useAppSelector(state => state.weather);

    const localizationDate = () => {
        let dateString = '';
        if (currentWeatherData) {
            dateString += moment(currentWeatherData.dt * 1000 + currentWeatherData.timezone * 1000)
                .utc(false)
                .format('HH:mm');
            const hoursAfterUtc = moment.duration(currentWeatherData.timezone * 1000).hours();
            dateString += ` (GMT${currentWeatherData.timezone > 0 ? '+' : ''}${hoursAfterUtc}:00)`;
        }
        return dateString;
    };

    return <>
        <DefaultLayout>
            <div className="d-flex justify-content-between p-4">
                <WeatherAppCity cityName={currentWeatherData ? currentWeatherData.name : cityName}
                                localizationDescription={localizationDate()}/>
                <WeatherAppCitySearch/>
            </div>
            <WeatherAppCurrentWeatherData/>
            <div className="p-4">
                <PageSeparator/>
            </div>
            <WeatherAppHourlyWeatherData/>
        </DefaultLayout>
    </>;
};