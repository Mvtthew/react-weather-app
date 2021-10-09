import React from "react";

interface Props {
    cityName: string;
    localizationDescription: string;
}

export const WeatherAppCity: React.FC<Props> = ({cityName, localizationDescription}): JSX.Element => {
    return <>
        <div>
            <h2 className="mb-0 fw-bold">
                {cityName}
            </h2>
            <p className="mb-0">
                {localizationDescription}
            </p>
        </div>
    </>;
};