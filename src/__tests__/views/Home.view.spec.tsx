import React from 'react';
import { render } from '@testing-library/react';
import {HomeView} from "../../views/Home.view";

test('renders learn react link', () => {
    render(<HomeView />);
});
