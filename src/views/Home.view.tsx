import React, {useEffect, useState} from 'react';
import {DefaultLayout} from '../layouts/Detault.layout';
import {WeatherAppCitySearch} from '../components/weather-app/WeatherAppCitySearch';
import {WeatherAppCity} from '../components/weather-app/WeatherAppCity';
import {useOpenWeatherApi} from '../hooks/useOpenWeatherApi';
import {WeatherForCityResponseType} from '../api/openWeather/types/WeatherForCityResponseType';

export const HomeView: React.FC<{}> = (): JSX.Element => {

    const openWeatherApi = useOpenWeatherApi();

    const [weather, setWeather] = useState<WeatherForCityResponseType>();

    useEffect(() => {
        openWeatherApi.getWeatherForCityName('Krakow').then(res => {
            setWeather(res.data);
        });
    }, []);

    return <>
        <DefaultLayout>
            <div className="d-flex justify-content-between p-4">
                <WeatherAppCity cityName={'Kraków'} localizationDescription={'małopolskie, Polska'}/>
                <WeatherAppCitySearch/>
            </div>
            {weather && <img src={openWeatherApi.generateIconImageUrl(weather.weather[0].icon)}/>}
        </DefaultLayout>
    </>;
};