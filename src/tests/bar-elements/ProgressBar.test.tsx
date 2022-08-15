/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import ProgressBar from 'components/bar-elements/ProgressBar';

describe('ProgressBar Default', () => {
    test('renders the ProgressBar component with default props', () => {
        render(
            <ProgressBar
                percentageValue={50}
            />
        );
    });
});
