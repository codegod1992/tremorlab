/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import DeltaBar from 'components/bar-elements/DeltaBar';

describe('DeltaBar Default', () => {
    test('renders the DeltaBar component with default props', () => {
        render(
            <DeltaBar
                percentageValue={50}
            />
        );
    });
});
