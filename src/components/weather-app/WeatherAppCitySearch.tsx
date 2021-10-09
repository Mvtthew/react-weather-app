import React, {useState} from 'react';
import {PageModal} from '../ui/PageModal';

export const WeatherAppCitySearch: React.FC = (): JSX.Element => {

    const [showSearchModal, setShowSearchModal] = useState<boolean>(true);

    return <>
        <button className="btn btn-icon btn-lg btn-primary text-white shadow-sm rounded-circle text-nowrap"
                onClick={() => setShowSearchModal(true)}>
            <i className="bx bx-search-alt"/>
        </button>

        <PageModal show={showSearchModal} setShow={setShowSearchModal}>
            <div className="text-center">
                <input className="search-input" placeholder="City name"/>
            </div>
        </PageModal>
    </>;
};