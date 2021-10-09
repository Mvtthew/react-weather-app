import React from 'react';
import {useOpenWeatherApi} from '../../hooks/useOpenWeatherApi';

interface Props {
    icon: string;
}

export const WeatherAppWeatherIcon: React.FC<Props> = ({icon}): JSX.Element => {

    const openWeatherApi = useOpenWeatherApi();

    return <img alt="Weather app - weather condition icon"
                src={openWeatherApi.generateIconImageUrl(icon)}/>;
};