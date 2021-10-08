import React from 'react';
import ReactDOM from 'react-dom';
import {HomeView} from "./views/Home.view";
import dotenv from 'dotenv';

/* Global styles
* */
import './scss/styles.scss';

/* Environmental variables
* Loaded from /.env file
* */
dotenv.config();

ReactDOM.render(
    <React.StrictMode>
        <HomeView />
    </React.StrictMode>,
    document.getElementById('root')
);

