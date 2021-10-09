import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import {LocalizationType} from './types/LocalizationType';
import {Locales} from './localization/Locales';
import {HomeView} from './views/Home.view';

/* Global styles
* */
import './scss/styles.scss';
import {defaultLocaleKey} from './config/Config';

/* Localization setup
* Default locale key loaded from /.env file via key [DEFAULT_LOCALE]
* */
export const LocalizationContext = createContext<LocalizationType>(Locales[defaultLocaleKey]);

ReactDOM.render(
    <React.StrictMode>
        <LocalizationContext.Provider value={Locales['en']}>
            <HomeView/>
        </LocalizationContext.Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

