/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import StackedBar from 'components/bar-elements/StackedBar';

describe('StackedBar', () => {
    test('renders the StackedBar component', () => {
        render(
            <StackedBar elements={[
                [25, 'bg-yellow-400'],
                [50, 'bg-green-400'],
                [25, 'bg-blue-400'],
            ]} />
        );
    });
});
