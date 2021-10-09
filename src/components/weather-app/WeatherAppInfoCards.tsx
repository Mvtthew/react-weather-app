import React from 'react';
import {WeatherCardDataType} from '../../types/WeatherCardDataType';

interface Props {
    cardsData: WeatherCardDataType[];
}

export const WeatherAppInfoCards: React.FC<Props> = ({cardsData}): JSX.Element => {
    return <div className="py-2 px-4">
        <div className="d-flex justify-content-between">
            {cardsData.map((
                cardData,
                index) =>
                <div key={`info-card_${index}`}
                     className="text-start w-100">
                    <p className="mb-0">{cardData.title}</p>
                    <p className="mb-0 fw-bold">
                        {cardData.value}
                    </p>
                </div>)}
        </div>
    </div>;
};