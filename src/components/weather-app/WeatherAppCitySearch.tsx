import React, {useRef, useState} from 'react';
import {PageModal} from '../ui/PageModal';
import {useLocales} from '../../hooks/useLocales';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {setCityName} from '../../store/weather/weatherReducer';

export const WeatherAppCitySearch: React.FC = (): JSX.Element => {

    const dispatch = useAppDispatch();
    const {locales} = useLocales();

    const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const updateWeatherCity = () => {
        const value = searchInputRef.current ? searchInputRef.current.value : '';
        dispatch(setCityName(value));
        setShowSearchModal(false);
    };

    return <>
        <button className="btn btn-icon btn-lg btn-primary text-white shadow-sm rounded-circle text-nowrap"
                onClick={() => setShowSearchModal(true)}>
            <i className="bx bx-search"/>
        </button>

        <PageModal show={showSearchModal}
                   setShow={setShowSearchModal}>
            <div className="text-center">
                <input ref={searchInputRef}
                       onKeyDown={e => {
                           if (e.key === 'Enter') updateWeatherCity();
                       }}
                       className="search-input h6 text-center"
                       placeholder={locales.enterCityName}/>
                <button onClick={updateWeatherCity}
                        className="btn btn-lg btn-primary rounded-pill text-white d-block m-auto mt-4">
                    {locales.search}
                    <i className="bx bx-search ms-2"/>
                </button>
            </div>
        </PageModal>
    </>;
};