import React, {useEffect} from 'react';
import {HomeView} from './views/Home.view';
import {useLocalizationContext} from './hooks/useLocalizationContext';
import {LocalizationContextType} from './types/LocalizationContextType';
import {Locales} from './localization/Locales';
import {defaultLocaleKey} from './config/Config';
import {useOpenWeatherApi} from './hooks/useOpenWeatherApi';
import {useAppDispatch} from './hooks/useAppDispatch';
import {setLoading, setWeatherData} from './store/weather/weatherReducer';
import {useAppSelector} from './hooks/useAppSelector';

export const LocalizationContext = React.createContext<LocalizationContextType>({
    locales: Locales[defaultLocaleKey],
    setLocales: () => {
    },
});

export const App: React.FC = (): JSX.Element => {

    const dispatch = useAppDispatch();
    const localizationContextValue = useLocalizationContext();
    const openWeatherApi = useOpenWeatherApi();

    const cityName = useAppSelector(state => state.weather.cityName);

    const updateWeatherDataForCityName = async () => {
        dispatch(setLoading(true));
        try {
            const resCurrent = await openWeatherApi.getCurrentWeatherForCityName(cityName);
            dispatch(setWeatherData(resCurrent.data));
        } catch {
            dispatch(setWeatherData(null));
        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        if (cityName) {
            updateWeatherDataForCityName();
        }
    }, [cityName]);

    return <>
        <LocalizationContext.Provider value={localizationContextValue}>
            <HomeView/>
        </LocalizationContext.Provider>
    </>;
};