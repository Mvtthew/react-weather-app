import React from 'react';
import {useOpenWeatherApi} from '../../hooks/useOpenWeatherApi';

interface Props {
    icon: string;
    size?: number;
}

export const WeatherAppWeatherIcon: React.FC<Props> = ({
    icon,
    size,
}): JSX.Element => {

    const openWeatherApi = useOpenWeatherApi();

    return <img alt="Weather app - weather condition icon"
                src={openWeatherApi.generateIconImageUrl(icon)}
                width={size}
                height={size}/>;
};