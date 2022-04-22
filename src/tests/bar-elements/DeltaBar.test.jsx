/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import DeltaBar from 'components/bar-elements/DeltaBar';

describe('DeltaBar', () => {
    test('renders the DeltaBar component', () => {
        render(
            <DeltaBar
                percentageWidth={50}
                deltaType="decrease"
            />
        );
    });
});
