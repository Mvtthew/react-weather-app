import React from 'react';
import {DefaultLayout} from '../layouts/Detault.layout';
import {WeatherAppCitySearch} from '../components/weather-app/WeatherAppCitySearch';
import {WeatherAppCity} from '../components/weather-app/WeatherAppCity';

export const HomeView: React.FC<{}> = (): JSX.Element => {

    return <>
        <DefaultLayout>
            <div className="d-flex justify-content-between p-4">
                <WeatherAppCity cityName={'Kraków'} localizationDescription={'małopolskie, Polska'}/>
                <WeatherAppCitySearch/>
            </div>
        </DefaultLayout>
    </>;
};