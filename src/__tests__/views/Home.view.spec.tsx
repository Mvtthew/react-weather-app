import React from 'react';
import {render} from '@testing-library/react';
import {App} from '../../App';
import {Wrapper} from '../../test-utils';

test('Should render App in Provider', () => {
    render(<Wrapper><App/></Wrapper>);
});
