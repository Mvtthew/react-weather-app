// test-utils.jsx
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';

export const Wrapper: React.FC = ({children}) => {
    return <Provider store={store}>{children}</Provider>;
};
