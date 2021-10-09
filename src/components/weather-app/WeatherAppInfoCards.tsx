import React from 'react';
import {WeatherCardDataType} from '../../types/WeatherCardDataType';

interface Props {
    cardsData: WeatherCardDataType[];
}

export const WeatherAppInfoCards: React.FC<Props> = ({cardsData}): JSX.Element => {
    return <div className="py-2">
        <div className="d-flex justify-content-between">
            {cardsData.map((cardData,
                index) =>
                <div key={`info-card_${index}`}
                     className="card bg-transparent rounded-lg p-3 shadow-sm text-start w-100 mx-1">
                    <p className="mb-0">{cardData.title}</p>
                    <p className="mb-0 fw-bold">
                        {cardData.value}
                    </p>
                </div>)}
        </div>
    </div>;
};