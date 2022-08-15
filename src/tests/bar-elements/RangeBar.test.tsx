/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import RangeBar from 'components/bar-elements/RangeBar';

describe('RangeBar Default', () => {
    test('renders the RangeBar component with default props', () => {
        render(
            <RangeBar
                percentageValue={50}
                minRangeValue={25}
                maxRangeValue={75}
            />
        );
    });
});
