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

export const LocalizationContext = createContext<LocalizationType>(Locales['en']);

ReactDOM.render(
    <React.StrictMode>
        <LocalizationContext.Provider value={Locales['en']}>
            <HomeView />
        </LocalizationContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

