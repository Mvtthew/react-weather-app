import React from 'react';
import {DefaultLayout} from '../layouts/Detault.layout';
import {WeatherAppCitySearch} from '../components/weather-app/WeatherAppCitySearch';
import {WeatherAppCity} from '../components/weather-app/WeatherAppCity';
import {useAppSelector} from '../hooks/useAppSelector';
import {useOpenWeatherApi} from '../hooks/useOpenWeatherApi';

export const HomeView: React.FC<{}> = (): JSX.Element => {

    const openWeatherApi = useOpenWeatherApi();
    const {weatherData, cityName} = useAppSelector(state => state.weather);

    const localizationDate = () => {

        return '15:00';
    };

    return <>
        <DefaultLayout>
            <div className="d-flex justify-content-between p-4">
                <WeatherAppCity cityName={cityName} localizationDescription={localizationDate()}/>
                <WeatherAppCitySearch/>
            </div>
            {weatherData && <img alt="Weather app - weather condition icon"
			                     src={openWeatherApi.generateIconImageUrl(weatherData.weather[0].icon)}/>}
        </DefaultLayout>
    </>;
};