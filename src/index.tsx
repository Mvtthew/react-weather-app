import React, {createContext} from "react";
import ReactDOM from 'react-dom';
import {HomeView} from "./views/Home.view";
import dotenv from 'dotenv';
import {LocalizationType} from "./types/LocalizationType";
import {Locales} from "./localization/Locales";

/* Global styles
* */
import './scss/styles.scss';

/* Environmental variables
* Loaded from /.env file
* */
dotenv.config();

/* Localization setup
* Default locale key loaded from /.env file via key [DEFAULT_LOCALE]
* */
const defaultLocaleKey = process.env.DEFAULT_LOCALE as keyof typeof Locales;
export const LocalizationContext = createContext<LocalizationType>(Locales[defaultLocaleKey]);

ReactDOM.render(
    <React.StrictMode>
        <LocalizationContext.Provider value={Locales['en']}>
            <HomeView />
        </LocalizationContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

