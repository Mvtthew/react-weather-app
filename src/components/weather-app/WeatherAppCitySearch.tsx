import React, {useState} from 'react';
import {PageModal} from '../ui/PageModal';
import {useLocales} from '../../hooks/useLocales';

export const WeatherAppCitySearch: React.FC = (): JSX.Element => {

    const locales = useLocales();

    const [showSearchModal, setShowSearchModal] = useState<boolean>(false);

    return <>
        <button className="btn btn-icon btn-lg btn-primary text-white shadow-sm rounded-circle text-nowrap"
                onClick={() => setShowSearchModal(true)}>
            <i className="bx bx-search"/>
        </button>

        <PageModal show={showSearchModal} setShow={setShowSearchModal}>
            <div className="text-center">
                <input className="search-input h6 text-center" placeholder={locales.enterCityName}/>
                <button className="btn btn-lg btn-primary rounded-pill text-white d-block m-auto mt-4">
                    {locales.search}
                    <i className="bx bx-search ms-2"/>
                </button>
            </div>
        </PageModal>
    </>;
};